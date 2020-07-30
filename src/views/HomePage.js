import React from "react";
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import Avatar from "@material-ui/core/Avatar";
import Dialog from "@material-ui/core/Dialog";
// @material-ui/core icon
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import ScheduleIcon from "@material-ui/icons/Schedule";
// @material-ui custome component
import Footer from "components/Footer/Footer.js";
// react dragable
// import Draggable from 'react-draggable';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
// loading component
import Loading from "components/Loading/Loading.js";
//auth check
// import { authCheck } from 'function/auth.js';
//animation 
// import { bounce } from 'react-animations';
// import Radium, { StyleRoot } from 'radium';
import 'animate.css';
// style
import styles from "assets/jss/material-kit-react/views/homeStyle.js";
import Axios from "axios";
const useStyles = makeStyles(styles);

function Home(props) {
  const classes = useStyles();
  const [campainsList, setCampaignsList] = React.useState([]);
  const [reCampaignList, setReCampaignList] = React.useState([]);
  const [upCampaignList, setUpCampaignList] = React.useState([]);
  const [userData, setUserData] = React.useState("");
  const [pageLoad, setPageLoad] = React.useState(false);
  const [userList, setUserList] = React.useState([]);
  const [videoURL, setVideoURL] = React.useState("");
  const [videoViewModal, setVideoViewModal] = React.useState(false);

  function youtubeParser(url) {
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return match && match[7].length === 11 ? match[7] : false;
  }
  function openViewUser(url) {
    console.log(url);
    if (url.includes("youtube")) {
      setVideoURL(`https://www.youtube.com/embed/${youtubeParser(url)}`);
    } else {
      setVideoURL(url);
    }
    setVideoViewModal(true);
  }
  function viewModalChange(value) {
    setVideoViewModal(value);
  }
  //auth check
  React.useEffect(() => {
    if (localStorage.user_id === undefined) {
      window.location.href = "/register";
    } else {
      var flg = 0;
      Axios.post(`${window.$host_url}loginCheck`, { uid: localStorage.user_id })
        .then((res) => {
          setUserData(res.data.user);
          const usercat = res.data.user.categories;
          Axios.post(`${window.$host_url}campaigns/read`, { query: [] })
            .then((res) => {
              console.log(res);
              const res_cam = [];
              const up_camp = [];
              for (var k in res.data.result) {
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
                if (
                  new Date(res.data.result[k].start_at).getTime() >
                  new Date().getTime()
                ) {
                  up_camp.push(res.data.result[k]);
                }
              }
              setUpCampaignList(up_camp);
              setReCampaignList(res_cam);
              setCampaignsList(res.data.result);
              flg++;
              if (flg === 2) {
                setPageLoad(true);
              }
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
      Axios.post(`${window.$host_url}user/read`, {})
        .then((res) => {
          console.log(res);
          setUserList(res.data.result);
          flg++;
          if (flg === 2) {
            setPageLoad(true);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);
  React.useEffect(() => { }, []);
  return (
    <>
      <div className={classes.container}>
        {userData !== "" && pageLoad ? (
          <>
            <div className={classes.header}>
              <Typography variant="h5" className="header-name">
                Hi, {userData.info.name}!
              </Typography>
              <div style={{ flexGrow: 5 }}></div>
              <Badge color="secondary" badgeContent={3} className="header-noti">
                <NotificationsNoneIcon />
              </Badge>
            </div>
            <div className={classes.content}>
              <div className={classes.userList}>
                {userList.map((item, i) => {
                  return (
                    item.videos.length !== 0 && (
                      <div
                        key={i}
                        className="user-item-list"
                        onClick={() => {
                          openViewUser(
                            item.videos.length === 0
                              ? ""
                              : item.videos[0].video_url
                          );
                        }}
                      >
                        <Avatar
                          alt={item.info.name.split(" ")[0]}
                          src={item.info.image}
                        />
                        <p>{item.info.name.split(" ")[0]}</p>
                      </div>
                    )
                  );
                })}
              </div>
              <div className={classes.recommend}>
                <Typography variant="h6" className="recommend-title">
                  Recommended for you
                </Typography>
                <div className="recommend-carousel">
                  <Carousel showThumbs={false} showIndicators={false}>
                    {reCampaignList.map((item, i) => {
                      return (
                        <Link to={`/campaign-register/${item._id}`} key={i}>
                          <img src={item.image_url} alt="aour" />
                          <div className="recommend-footer">
                            <div className="recommend-details">
                              <p>Get ₹{item.price}</p>
                              <div style={{ flexGrow: 5 }}></div>
                              <p
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <ScheduleIcon />{" "}
                                {Math.ceil(
                                  (new Date(item.end_at) - new Date()) /
                                  (1000 * 60 * 60 * 24)
                                )}{" "}
                                days
                              </p>
                            </div>
                            <p className="recommend-name">{item.name}</p>
                          </div>
                        </Link>
                      );
                    })}
                  </Carousel>
                  {reCampaignList.length === 0 && (
                    <p style={{ marginTop: 10 }}>
                      There is not a campaign that matched to with your
                      categories
                    </p>
                  )}
                </div>
              </div>
              <div className={classes.uncomingCompaign}>
                <div className="uncoming-header">
                  <p className="uncoming-header-title">Upcoming Campaign</p>
                  <div style={{ flexGrow: 5 }}></div>
                  {upCampaignList.length !== 0 && (
                    <p
                      className="uncoming-header-more"
                      onClick={() => props.history.push("/campain")}
                    >
                      View more
                    </p>
                  )}
                </div>
                <div className="upcoming-content">
                  {upCampaignList.map((item, i) => {
                    return (
                      <Link
                        to={`/campaign-register/${item._id}`}
                        key={i}
                        className="capaign-list"
                      >
                        <div
                          style={{ backgroundImage: `url(${item.image_url})` }}
                          className="image-view"
                        ></div>
                        <div className="campaign-detail">
                          <p>Get ₹{item.price}</p>
                          <div style={{ flexGrow: 5 }}></div>
                          <p style={{ display: "flex", alignItems: "center" }}>
                            <ScheduleIcon />{" "}
                            {Math.ceil(
                              (new Date(item.end_at) - new Date()) /
                              (1000 * 60 * 60 * 24)
                            )}{" "}
                            days
                          </p>
                        </div>
                        <p style={{ display: "flex", alignItems: "center" }}>
                          {item.name}
                        </p>
                      </Link>
                    );
                  })}
                  {upCampaignList.length === 0 && (
                    <p>There are no upcoming campaigns.</p>
                  )}
                </div>
              </div>
              <div className={classes.uncomingCompaign}>
                <div className="uncoming-header">
                  <p className="uncoming-header-title">All Campaign</p>
                  <div style={{ flexGrow: 5 }}></div>
                  {campainsList.length !== 0 && (
                    <p
                      className="uncoming-header-more"
                      onClick={() => props.history.push("/campain")}
                    >
                      View more
                    </p>
                  )}

                </div>
                <div className="upcoming-content">
                  {campainsList.map((item, i) => {
                    return (
                      <Link
                        to={`/campaign-register/${item._id}`}
                        className="capaign-list"
                        key={i}
                      >
                        <div
                          style={{ backgroundImage: `url(${item.image_url})` }}
                          className="image-view"
                        ></div>
                        <div className="campaign-detail">
                          <p>Get ₹{item.price}</p>
                          <div style={{ flexGrow: 5 }}></div>
                          {new Date(item.end_at) < new Date() ? (
                            <p style={{ display: "flex", alignItems: "center" }}>
                              Finished
                            </p>
                          ) : (
                              <p style={{ display: "flex", alignItems: "center" }}>
                                <ScheduleIcon />{" "}
                                {Math.ceil(
                                  (new Date(item.end_at) - new Date()) /
                                  (1000 * 60 * 60 * 24)
                                )}{" "}
                              days
                              </p>
                            )}

                        </div>
                        <p style={{ display: "flex", alignItems: "center" }}>
                          {item.name}
                        </p>
                      </Link>
                    );
                  })}
                  {campainsList.length === 0 && (
                    <p>There are no campaigns.</p>
                  )}
                </div>
              </div>
            </div>
          </>
        ) : (
            <Loading />
          )}
        <Footer link="home" pageRouter={props.history} />
      </div>
      <Dialog
        onClose={() => viewModalChange(false)}
        aria-labelledby="simple-dialog-title"
        open={videoViewModal}
        className={classes.videoModal}
      >
        {videoURL !== "" ? (
          <iframe
            width="100%"
            height="315"
            src={videoURL}
            title="This is a unique title"
          ></iframe>
        ) : (
            <div
              style={{
                height: "315px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <p style={{ fontSize: "16px", fontWeight: "700" }}>
                The user has not uploaded the video yet.
            </p>
            </div>
          )}
      </Dialog>
    </>
  );
}

export default Home;
