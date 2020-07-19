import React from 'react';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
// @material-ui/core icon
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ScheduleIcon from '@material-ui/icons/Schedule';
// @material-ui custome component
import Footer from 'components/Footer/Footer.js';
// react dragable
// import Draggable from 'react-draggable';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
// style 
import styles from 'assets/jss/material-kit-react/views/homeStyle.js';
const useStyles = makeStyles(styles);

const user_list = [
    {
        name: 'Amite',
        image: require('assets/img/1.jpg')
    },
    {
        name: 'Ping',
        image: require('assets/img/2.png')
    },
    {
        name: 'John',
        image: require('assets/img/3.jpg')
    },
    {
        name: 'Hans',
        image: require('assets/img/4.jpg')
    },
    {
        name: 'Elena',
        image: require('assets/img/1.jpg')
    },
    {
        name: 'Saman',
        image: require('assets/img/2.png')
    },
    {
        name: 'Hamanai',
        image: require('assets/img/3.jpg')
    },
    {
        name: 'Ebro',
        image: require('assets/img/4.jpg')
    },
]

function Home(props) {
    const classes = useStyles();
    return(
        <div className={classes.container}>
            <div className={classes.header}>
                <Typography variant="h5" className="header-name">
                    Hi, Ashish!
                </Typography>
                <div style={{flexGrow: 5}}></div>
                <Badge color="secondary" badgeContent={3} className="header-noti">
                    <NotificationsNoneIcon />
                </Badge>
            </div>
            <div className={classes.content}>
                <div className={classes.userList}>
                    {user_list.map((item, i) => {
                        return(
                            <div key={i} className="user-item-list">
                                <Avatar alt={item.name} src={item.image} />
                                <p>{item.name}</p>
                            </div>
                        )
                    })}
                </div>
                <div className={classes.recommend}>
                    <Typography variant="h6" className="recommend-title">
                        Recommended for you
                    </Typography>
                    <div className="recommend-carousel">
                        <Carousel
                            showThumbs={false}
                            showIndicators={false}
                            
                        >
                            <div>
                                <img src={require('assets/img/1-1.jpg')} alt="aour"/>
                            </div>
                            <div>
                                <img src={require('assets/img/1-2.jpg')} alt="aour"/>
                            </div>
                            <div>
                                <img src={require('assets/img/1-3.jpg')} alt="aour"/>
                            </div>
                        </Carousel>
                    </div>
                    <div className="recommend-footer">
                        <div className="recommend-details">
                            <p>Get $1000</p>
                            <div style={{flexGrow: 5}}></div>
                            <p style={{display: 'flex', alignItems: 'center'}}><ScheduleIcon/> 30days</p>
                        </div>
                        <p className="recommend-name">Campain Name</p>
                    </div>
                </div>
                <div className={classes.uncomingCompaign}>
                    <div className="uncoming-header">
                        <p className="uncoming-header-title">Upcoming Campaign</p>
                        <div style={{flexGrow: 5}}></div>
                        <p className="uncoming-header-more">View more</p>
                    </div>
                    <div className="upcoming-content">
                        <div className="capaign-list">
                            <img src={require('assets/img/1-2.jpg')} alt="aour"/>
                            <div className="campaign-detail">
                                <p>Get $1000</p>
                                <div style={{flexGrow: 5}}></div>
                                <p style={{display: 'flex', alignItems: 'center'}}><ScheduleIcon/> 30days</p>
                            </div>
                            <p style={{display: 'flex', alignItems: 'center'}}>Campain Name</p>
                        </div>
                        <div className="capaign-list">
                            <img src={require('assets/img/1-3.jpg')} alt="aour"/>
                            <div className="campaign-detail">
                                <p>Get $1000</p>
                                <div style={{flexGrow: 5}}></div>
                                <p style={{display: 'flex', alignItems: 'center'}}><ScheduleIcon/> 30days</p>
                            </div>
                            <p style={{display: 'flex', alignItems: 'center'}}>Campain Name</p>
                        </div>
                        <div className="capaign-list">
                            <img src={require('assets/img/1-2.jpg')} alt="aour"/>
                            <div className="campaign-detail">
                                <p>Get $1000</p>
                                <div style={{flexGrow: 5}}></div>
                                <p style={{display: 'flex', alignItems: 'center'}}><ScheduleIcon/> 30days</p>
                            </div>
                            <p style={{display: 'flex', alignItems: 'center'}}>Campain Name</p>
                        </div>
                        <div className="capaign-list">
                            <img src={require('assets/img/1-1.jpg')} alt="aour"/>
                            <div className="campaign-detail">
                                <p>Get $1000</p>
                                <div style={{flexGrow: 5}}></div>
                                <p style={{display: 'flex', alignItems: 'center'}}><ScheduleIcon/> 30days</p>
                            </div>
                            <p style={{display: 'flex', alignItems: 'center'}}>Campain Name</p>
                        </div>
                    </div>
                    
                </div>
                <div className={classes.uncomingCompaign}>
                    <div className="uncoming-header">
                        <p className="uncoming-header-title">All Campaign</p>
                        <div style={{flexGrow: 5}}></div>
                        <p className="uncoming-header-more">View more</p>
                    </div>
                    <div className="upcoming-content">
                        <div className="capaign-list">
                            <img src={require('assets/img/1-3.jpg')} alt="aour"/>
                            <div className="campaign-detail">
                                <p>Get $1000</p>
                                <div style={{flexGrow: 5}}></div>
                                <p style={{display: 'flex', alignItems: 'center'}}><ScheduleIcon/> 30days</p>
                            </div>
                            <p style={{display: 'flex', alignItems: 'center'}}>Campain Name</p>
                        </div>
                        <div className="capaign-list">
                            <img src={require('assets/img/1-2.jpg')} alt="aour"/>
                            <div className="campaign-detail">
                                <p>Get $1000</p>
                                <div style={{flexGrow: 5}}></div>
                                <p style={{display: 'flex', alignItems: 'center'}}><ScheduleIcon/> 30days</p>
                            </div>
                            <p style={{display: 'flex', alignItems: 'center'}}>Campain Name</p>
                        </div>
                    </div>
                    
                </div>
            </div>
            <Footer link="home" pageRouter={props.history}/>
        </div>
    )
}

export default Home;