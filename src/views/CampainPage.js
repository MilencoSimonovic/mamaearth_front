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
// react dragable
// import Draggable from 'react-draggable';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
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

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
  
    const handleChangeIndex = (index) => {
        setValue(index);
    };
    const campaignSearch = (value) => {
        setSearchKey(value);
    }
    return(
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
                    <Tab label="Your compaigns" {...a11yProps(1)} />
                    <Tab label="Completed compaigns" {...a11yProps(2)} />
                </Tabs>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={value}
                    onChangeIndex={handleChangeIndex}
                >
                    <TabPanel value={value} index={0} dir={theme.direction}>
                        <Recommended search={searchKey}/>
                    </TabPanel>
                    <TabPanel value={value} index={1} dir={theme.direction}>
                        <MyCompaign search={searchKey}/>
                    </TabPanel>
                    <TabPanel value={value} index={2} dir={theme.direction}>
                        Item Three
                    </TabPanel>
                </SwipeableViews>
            </div>
            <Footer link="campaign" pageRouter={props.history}/>
        </div>
    )
}

export default Campaign;