import React from 'react';
// @material-ui/core components
import { makeStyles, useTheme } from "@material-ui/core/styles";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// react swipeable
import SwipeableViews from 'react-swipeable-views';
// @material-ui/core icon
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
// @material-ui/core icon
// @material-ui custome component
import Header from 'components/Header/Header.js';
import Footer from 'components/Footer/Footer.js';
// campaign components
import Recommended from './CampainComponent/Recommended.js';
import MyCompaign from './CampainComponent/MyCompaign.js';
import ComCapaign from './CampainComponent/CompleteCampaign.js';
// react dragable
// import Draggable from 'react-draggable';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
//api
import Axios from 'axios';
// style 
import styles from 'assets/jss/material-kit-react/views/campaignStyle.js';
const useStyles = makeStyles(styles);

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box component="div" m={1}>
                    {children}
                </Box>
            )}
        </div>
    );
}
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};
function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}
function Campaign(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    const [searchKey, setSearchKey] = React.useState('');
    const [myCampainsList, setMyCampaignsList] = React.useState([]);
    const [reCampaignList, setReCampaignList] = React.useState([]);
    const [comCampaignList, setComCampaignList] = React.useState([]);
    const [myCampainsList1, setMyCampaignsList1] = React.useState([]);
    const [reCampaignList1, setReCampaignList1] = React.useState([]);
    const [comCampaignList1, setComCampaignList1] = React.useState([]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };
    const campaignSearch = (value) => {
        setSearchKey(value);
        const my_cam = [];
        const res_cam = [];
        const com_cam = [];
        var search_key = value.split(" ");
        if (value !== '') {
            for (var i in search_key) {
                for (var j in myCampainsList1) {
                    if (JSON.stringify(myCampainsList1[j].categories).toLowerCase().includes(search_key[i])) {
                        my_cam.push(myCampainsList1[j]);
                    }
                }
                for (j in reCampaignList1) {
                    if (JSON.stringify(reCampaignList1[j].categories).toLowerCase().includes(search_key[i])) {
                        res_cam.push(reCampaignList1[j]);
                    }
                }
                for (j in comCampaignList1) {
                    if (JSON.stringify(comCampaignList1[j].categories).toLowerCase().includes(search_key[i])) {
                        com_cam.push(comCampaignList1[j]);
                    }
                }
            }
            setMyCampaignsList(my_cam);
            setReCampaignList(res_cam);
            setComCampaignList(com_cam);
        }
        else {
            setMyCampaignsList(myCampainsList1);
            setReCampaignList(reCampaignList1);
            setComCampaignList(comCampaignList1);
        }

    }
    //auth check
    React.useEffect(() => {
        if (localStorage.user_id === undefined) {
            window.location.href = "/register";
        }
        else {
            Axios.post(`${window.$host_url}loginCheck`, { uid: localStorage.user_id })
                .then(res => {
                    const user_data = res.data.user;
                    const usercat = res.data.user.categories;
                    Axios.post(`${window.$host_url}campaigns/read`, { query: [] }).then(res => {
                        const my_cam = [];
                        const res_cam = [];
                        const com_cam = [];
                        for (var k in res.data.result) {
                            console.log(JSON.stringify(res.data.result[k].categories).toLowerCase());
                            var content_flg = false;
                            for (var i in usercat) {
                                for (var j in res.data.result[k].categories) {
                                    if (usercat[i] === res.data.result[k].categories[j]) {
                                        res_cam.push(res.data.result[k]);
                                        content_flg = true;
                                        break;
                                    }
                                }
                                if (content_flg) {
                                    break;
                                }
                            }
                            if (user_data.info.campaign_id.includes(res.data.result[k]._id)) {
                                my_cam.push(res.data.result[k]);
                                if (new Date(res.data.result[k].end_at) < new Date()) {
                                    com_cam.push(res.data.result[k]);
                                }
                            }
                        }
                        setMyCampaignsList(my_cam);
                        setReCampaignList(res_cam);
                        setComCampaignList(com_cam);
                        setMyCampaignsList1(my_cam);
                        setReCampaignList1(res_cam);
                        setComCampaignList1(com_cam);
                    })
                        .catch(err => {
                            console.log(err);
                        })
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }, [])
    return (
        <div className={classes.container}>
            <Header
                title=""
                backIcon={<span>LOGO</span>}
                back={true}
                search={true}
                searchChange={campaignSearch}
            />
            <div className={classes.content}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                    className={classes.campaignTab}
                >
                    <Tab label="Recommended for you" {...a11yProps(0)} />
                    <Tab label="Your campaigns" {...a11yProps(1)} />
                    <Tab label="Completed campaigns" {...a11yProps(2)} />
                </Tabs>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={value}
                    onChangeIndex={handleChangeIndex}
                >
                    <TabPanel value={value} index={0} dir={theme.direction}>
                        <Recommended search={searchKey} campaignList={reCampaignList} />
                    </TabPanel>
                    <TabPanel value={value} index={1} dir={theme.direction}>
                        <MyCompaign search={searchKey} campaignList={myCampainsList} />
                    </TabPanel>
                    <TabPanel value={value} index={2} dir={theme.direction}>
                        <ComCapaign search={searchKey} campaignList={comCampaignList} />
                    </TabPanel>
                </SwipeableViews>
            </div>
            <Footer link="campaign" pageRouter={props.history} />
        </div>
    )
}

export default Campaign;