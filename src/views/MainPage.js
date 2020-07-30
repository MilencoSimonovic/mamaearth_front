import React from 'react';
// @material-ui/core components
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
// import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
// @material-ui/icon component
import HomeIcon from "@material-ui/icons/Home";
import CameraIcon from "@material-ui/icons/Camera";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import ShareIcon from "@material-ui/icons/Share";
import PersonIcon from "@material-ui/icons/Person";
// main components
import Home from "./HomePage.js";
import Campaign from './CampainPage.js';
// style 
import styles from 'assets/jss/material-kit-react/views/mainStyle.js';

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
                <Box p={3}>
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

const useStyles = makeStyles(styles);

function Main(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <div className={classes.container}>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
                className={classes.content}
            >
                <TabPanel value={value} index={0} dir={theme.direction}>
                    <Home {...props} />
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    <Campaign {...props} />
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                    Learn
                </TabPanel>
                <TabPanel value={value} index={3} dir={theme.direction}>
                    Refer
                </TabPanel>
                <TabPanel value={value} index={4} dir={theme.direction}>
                    Profile
                </TabPanel>
            </SwipeableViews>
            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                variant="fullWidth"
                aria-label="full width tabs example"
                className={classes.footer}
            >
                <Tab label="Home" {...a11yProps(0)} icon={<HomeIcon />} className="bottom-tab" />
                <Tab label="Campaigns" {...a11yProps(1)} icon={<CameraIcon />} className="bottom-tab" />
                <Tab label="Learn" {...a11yProps(2)} icon={<MenuBookIcon />} className="bottom-tab" />
                <Tab label="Refer" {...a11yProps(3)} icon={<ShareIcon />} className="bottom-tab" />
                <Tab label="Profile" {...a11yProps(4)} icon={<PersonIcon />} className="bottom-tab" />
            </Tabs>
        </div>
    );
}

export default Main