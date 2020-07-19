import React from 'react';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui custome component
import Header from 'components/Header/Header.js';
import Footer from 'components/Footer/Footer.js';
// moment.js
import moment from 'moment';
// caresoul
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
//data
import campData from 'data/campdata.js';
//styles
import styles from 'assets/jss/material-kit-react/views/learnStyle.js';
const useStyles = makeStyles(styles);

function Learn(props) {
    const classes = useStyles();
    const [searchKey, setSearchKey] = React.useState('');

    const campaignSearch = (value) => {
        setSearchKey(value);
    }
    
    console.log(searchKey)
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
                {campData.map((item ,i) => {
                    return(
                        <div className={classes.campaignItem}  key={i}>
                            <div className="campaign-header">
                                <img src={item.user_avatar} alt={item.user_name}/>
                                <div className="user-data">
                                    <p className="user-name">{item.user_name}</p>
                                    <p className="create-date">{moment(item.create_at).format("MMM Do YY")}</p>
                                </div>
                            </div>
                            <div className="campaign-content">
                                <Carousel
                                    showThumbs={false}
                                    showIndicators={true}
                                    
                                >
                                    {item.image_list.map((item1, j) => {
                                        return(
                                            <div key={j}><img src={item1} alt="aour"/></div>
                                        )
                                    })}
                                </Carousel>
                            </div>
                        </div>
                    )
                })}
            </div>
            <Footer link="learn" pageRouter={props.history}/>
        </div>
    )
}

export default Learn;