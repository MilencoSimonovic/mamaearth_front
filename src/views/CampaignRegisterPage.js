import React from "react";
// api
import Axios from "axios";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import CircularProgress from "@material-ui/core/CircularProgress";
// @material-ui/core icon
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import CheckIcon from "@material-ui/icons/Check";
import ShopTwoIcon from "@material-ui/icons/ShopTwo";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import AspectRatioIcon from "@material-ui/icons/AspectRatio";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CloseIcon from "@material-ui/icons/Close";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

//api
import axios from "axios";
// loading component
import Loading from "components/Loading/Loading.js";
//
import CamRegisterSuccess from "./CamRegisterComponent/Success.js";
//styles
import styles from "assets/jss/material-kit-react/views/campaignRegisterStyle.js";
const useStyles = makeStyles(styles);

function CampaignRegister(props) {
  const classes = useStyles();
  const [campaignData, setCampaignData] = React.useState("");
  const [registerStep, setRegisterStep] = React.useState(0);
  const [videoType, setVideoType] = React.useState("url");
  const [videoUrl, setVideoUrl] = React.useState("");
  const [videoName, setVideoName] = React.useState("");
  const [videoData, setVideoData] = React.useState("");
  const [modalOpen, setModalOpen] = React.useState(false);
  const [videoViewOpen, setVideoViewOpen] = React.useState(false);
  const [fileProgress, setFileProcess] = React.useState(0);
  const [userData, setUserData] = React.useState("");
  const [saveProcess, setSaveProcess] = React.useState(false);
  const [successModal, setSuccessModal] = React.useState(false);
  const [userList, setUserList] = React.useState([]);
  const [uploadSpeed, setUploadSpeed] = React.useState(0);
  const [remainTime, setRemainTime] = React.useState(0);

  function successModalChange(value) {
    setSuccessModal(value);
  }
  function viewModalChange(value) {
    setVideoViewOpen(value);
  }
  function register() {
    userData.campaign_id.push(props.match.params.camp_id);
    var data = {
      uid: localStorage.user_id,
      updateData: {
        info: userData,
      },
    };
    Axios.post(`${window.$host_url}account/update`, data)
      .then((res) => {
        setRegisterStep(1);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function videoUpload() {
    openVideoUpload(true);
  }
  function changeVideoType(e) {
    setVideoType(e.target.value);
  }
  function finish() {
    setSuccessModal(true);
  }
  function submite() {
    setSaveProcess(true);
    var data = {
      cp_id: props.match.params.camp_id,
      uid: localStorage.user_id,
      video_url: videoUrl,
    };
    Axios.post(`${window.$host_url}videos/save`, data)
      .then((res) => {
        setRegisterStep(3);
        openVideoUpload(false);
        setSaveProcess(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function nextPPP() {
    setRegisterStep(2);
    openVideoUpload(false);
  }
  function timeDisp(time) {
    var min = parseInt(time / 60);
    var sec = time % 60;
    if (min < 10) {
      min = '0' + min;
    }
    if (sec < 10) {
      sec = '0' + sec;
    }

    return `${min} : ${sec}`
  }
  function videoChange(e) {
    e.preventDefault();
    let newFile = e.target.files[0];
    setVideoName(newFile.name);
    const file_size = newFile.size;
    var formData = new FormData();
    formData.append("file", newFile);
    var end_time = new Date().getTime();
    var end_upload_size = file_size;
    Axios.post(`${window.$host_url}upload-file`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress: (progressEvent) => {
        var speed = (progressEvent.loaded - end_upload_size) / (new Date().getTime() - end_time) / 1000;
        var time = (file_size - progressEvent.loaded) / ((progressEvent.loaded - end_upload_size) / (new Date().getTime() - end_time));
        setUploadSpeed(`${speed.toFixed(2)} MB/s`);
        setRemainTime(timeDisp(Math.round(time / 1000)))
        setFileProcess((progressEvent.loaded / file_size) * 100);
        end_time = new Date().getTime();
        end_upload_size = progressEvent.loaded;
      },
    })
      .then((res) => {
        setVideoUrl(res.data.data.url);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function youtubeParser(url) {
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return match && match[7].length === 11 ? match[7] : false;
  }
  function videoDelete() {
    setVideoName("");
  }
  function youTubeChange(e) {
    setVideoUrl(e.target.value);
    const video_id = youtubeParser(e.target.value);
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/videos?key=AIzaSyB9LJvtSahJiswIUZODkenQdA8rrSWbLFs&part=snippet&id=${video_id}`
      )
      .then((res) => {
        setVideoData(res.data.items[0].snippet);
      })
      .catch((error) => {
        console.log(error);
      });
    // setVideoImage(video_url);
  }
  function openVideoUpload(value) {
    setModalOpen(value);
  }
  // auth
  React.useEffect(() => {
    if (localStorage.user_id === undefined) {
      window.location.href = "/register";
    } else {
      Axios.post(`${window.$host_url}loginCheck`, { uid: localStorage.user_id })
        .then((res) => {
          setUserData(res.data.user.info);
          if (
            res.data.user.info.campaign_id.includes(props.match.params.camp_id)
          ) {
            Axios.post(`${window.$host_url}videos/read`, {
              query: [
                {
                  $match: {
                    cp_id: props.match.params.camp_id,
                    uid: localStorage.user_id,
                  },
                },
                {
                  $lookup: {
                    from: "users",
                    foreignField: "auth.uid",
                    localField: "uid",
                    as: "user",
                  },
                },
                {
                  $unwind: "$user",
                },
              ],
            })
              .then((res) => {
                if (res.data.result.length === 0) {
                  setRegisterStep(2);
                } else {
                  setRegisterStep(3);
                }
              })
              .catch((err) => {
                console.log(err);
              });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [props.match.params.camp_id]);

  React.useEffect(() => {
    Axios.post(`${window.$host_url}campaigns/read`, {
      query: [{ $match: { _id: props.match.params.camp_id } }],
    })
      .then((res) => {
        setCampaignData(res.data.result[0]);
      })
      .catch((err) => {
        console.log(err);
      });

    Axios.post(`${window.$host_url}videos/read`, {
      query: [
        {
          $match: {
            cp_id: props.match.params.camp_id,
          },
        },
        {
          $lookup: {
            from: "users",
            foreignField: "auth.uid",
            localField: "uid",
            as: "user",
          },
        },
        {
          $unwind: "$user",
        },
      ],
    })
      .then((res) => {
        setUserList(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.match.params.camp_id]);

  return (
    <>
      <div className={classes.container}>
        {campaignData !== "" ? (
          <>
            <div
              className={classes.paralex}
              style={{ backgroundImage: `url(${campaignData.image_url})` }}
            >
              <IconButton
                className={classes.backButton}
                onClick={() => {
                  props.history.goBack();
                }}
              >
                <ArrowBackIosIcon />
              </IconButton>
              <div className="video-play-btn">
                <div
                  className="play-icon"
                  onClick={() => {
                    viewModalChange(true);
                  }}
                ></div>
              </div>
            </div>
            <div className={classes.campaignContent}>
              <div className="campaign-title">
                <p style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '70%' }}>{campaignData.name}</p>
                <div style={{ flexGrow: 5 }}></div>
                {(new Date(campaignData.end_at) < new Date()) ? (
                  <p style={{ display: "flex", alignItems: "center" }}>Finished</p>
                ) : (
                    <p style={{ display: "flex", alignItems: "center" }}>
                      <AccessTimeIcon />
                      {Math.ceil(
                        (new Date(campaignData.end_at) - new Date()) /
                        (1000 * 60 * 60 * 24)
                      )}{" "}
                    days
                    </p>
                  )}
              </div>
              <div className="campaign-intro">
                <Typography variant="h5">
                  {campaignData.name} will come here
                </Typography>
                <p className="campaign-discription">
                  {campaignData.description}
                </p>
              </div>
              <div className="hurryup-message">
                ₹ You can get up to Rs. {campaignData.price}. Hurry up!!
              </div>
              <div className="campaign-step-list">
                <Typography variant="subtitle2" className="title">
                  Step to follow
                </Typography>
                <div className="start-line"></div>
                <div>
                  <Timeline align="left" className={classes.stepList}>
                    <TimelineItem>
                      <TimelineSeparator>
                        <TimelineDot
                          className={
                            registerStep > 0 ? "passed" : "list-dot-icon"
                          }
                        >
                          <CheckIcon />
                        </TimelineDot>
                        <TimelineConnector />
                      </TimelineSeparator>
                      <TimelineContent>
                        <Typography
                          variant="subtitle2"
                          className="list-sub-title"
                        >
                          Register in the campaign
                        </Typography>
                        <Typography className="list-sub-dis">
                          Please register to this campaign Please register to
                          this campaign
                        </Typography>
                      </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                      <TimelineSeparator>
                        {registerStep > 1 ? (
                          <TimelineDot className="passed">
                            <CheckIcon />
                          </TimelineDot>
                        ) : (
                            <TimelineDot className="list-dot-icon">
                              <ShopTwoIcon />
                            </TimelineDot>
                          )}
                        <TimelineConnector />
                      </TimelineSeparator>
                      <TimelineContent>
                        <Typography
                          variant="subtitle2"
                          className="list-sub-title"
                        >
                          Products arriving
                        </Typography>
                        <Typography className="list-sub-dis">
                          Please register to this campaign Please register to
                          this campaign
                        </Typography>
                      </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                      <TimelineSeparator>
                        {registerStep > 2 ? (
                          <TimelineDot className="passed">
                            <CheckIcon />
                          </TimelineDot>
                        ) : (
                            <TimelineDot className="list-dot-icon">
                              <PlayArrowIcon />
                            </TimelineDot>
                          )}
                        <TimelineConnector />
                      </TimelineSeparator>
                      <TimelineContent>
                        <Typography
                          variant="subtitle2"
                          className="list-sub-title"
                        >
                          Video upload
                        </Typography>
                        <Typography className="list-sub-dis">
                          Please register to this campaign Please register to
                          this campaign
                        </Typography>
                      </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                      <TimelineSeparator>
                        <TimelineDot className="list-dot-icon">
                          <AspectRatioIcon />
                        </TimelineDot>
                      </TimelineSeparator>
                      <TimelineContent>
                        <Typography
                          variant="subtitle2"
                          className="list-sub-title"
                        >
                          Campaign live
                        </Typography>
                        <Typography className="list-sub-dis">
                          Please register to this campaign Please register to
                          this campaign
                        </Typography>
                      </TimelineContent>
                    </TimelineItem>
                  </Timeline>
                </div>
              </div>
              <div className="terms-condition">
                <Typography variant="subtitle2" className="title">
                  Terms and conditions
                </Typography>
                <div className="start-line"></div>
                <div className="terms-conditions-content">
                  <ul>
                    <li>
                      Please register to this campaign Please register to this
                      campaign
                    </li>
                    <li>
                      Please register to this campaign Please register to this
                      campaign
                    </li>
                    <li>
                      Please register to this campaign Please register to this
                      campaign
                    </li>
                  </ul>
                </div>
              </div>
              <div className="faqs">
                <Typography variant="subtitle2" className="title">
                  FAQS
                </Typography>
                <div className="start-line"></div>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography className={classes.heading}>FAQ 1</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography className={classes.heading}>FAQ 2</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography className={classes.heading}>FAQ 3</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>
            {(new Date(campaignData.end_at) < new Date()) ? (
              <p style={{ fontWeight: 700, margin: 0, backgroundColor: 'white', padding: '10px', textAlign: 'center' }}>This campaign is finished</p>
            ) : (
                <div className={classes.footerPart}>
                  {registerStep === 0 && (
                    <Button
                      fullWidth
                      variant="contained"
                      color="primary"
                      className="footer-button"
                      onClick={register}
                    >
                      Register Now
                    </Button>
                  )}
                  {registerStep === 1 && (
                    <Button
                      fullWidth
                      variant="contained"
                      color="primary"
                      className="footer-button"
                      onClick={nextPPP}
                    >
                      Next
                    </Button>
                  )}
                  {registerStep === 2 && (
                    <Button
                      fullWidth
                      variant="contained"
                      color="primary"
                      className="footer-button"
                      onClick={videoUpload}
                    >
                      Video Upload
                    </Button>
                  )}
                  {registerStep === 3 && (
                    <Button
                      fullWidth
                      variant="contained"
                      color="primary"
                      className="footer-button"
                      onClick={finish}
                    >
                      Finish
                    </Button>
                  )}
                </div>)}

          </>
        ) : (
            <div
              style={{
                flex: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "white",
              }}
            >
              <Loading />
            </div>
          )}

        {modalOpen && (
          <div className={classes.uploadModal}>
            <div className="modal-content">
              <div className="modal-header">
                <p className="header-title">Upload video</p>
                <div style={{ flexGrow: 5 }}></div>
                <IconButton onClick={() => openVideoUpload(false)}>
                  <CloseIcon />
                </IconButton>
              </div>
              <div className="modal-campaign-info">
                <span className="left-days">
                  <QueryBuilderIcon />
                  {Math.ceil(
                    (new Date(campaignData.end_at) - new Date()) /
                    (1000 * 60 * 60 * 24)
                  )}{" "}
                  days left
                </span>
                <span className="name">{campaignData.name}</span>
              </div>
              <div className="modal-user-list">
                {userList.map((item, i) => {
                  return (
                    i < 5 && (
                      <img src={item.user.info.image} alt="user-avatar" key={i} />
                    )
                  );
                })}
                <div className="more-user-num">
                  {userList.length <= 5
                    ? ""
                    : `+ ${userList.length - 5} Joined`}
                </div>
              </div>
              <div className="modal-video-upload-option">
                <p>How do you want to upload video</p>
                <div className="options">
                  <RadioGroup
                    row
                    value={videoType}
                    aria-label="position"
                    name="position"
                    defaultValue="top"
                    onChange={changeVideoType}
                  >
                    <FormControlLabel
                      value="url"
                      control={<Radio color="primary" />}
                      label="URL"
                    />
                    <FormControlLabel
                      value="video"
                      control={<Radio color="primary" />}
                      label="Upload video"
                    />
                  </RadioGroup>
                </div>
              </div>
              <div className="modal-video-upload-part">
                {videoType === "url" ? (
                  <div>
                    <p>Paste your video link below</p>
                    <TextField
                      id="video-url"
                      variant="outlined"
                      fullWidth
                      className="pan-input"
                      value={videoUrl}
                      onChange={(e) => youTubeChange(e)}
                    />
                    {videoData !== "" && (
                      <div className="video-info">
                        <img
                          src={videoData.thumbnails.medium.url}
                          alt="video-back"
                        />
                        <p className="title">{videoData.localized.title}</p>
                        <p className="discription">
                          {videoData.localized.description}
                        </p>
                      </div>
                    )}
                  </div>
                ) : (
                    <div>
                      {videoName === "" ? (
                        <>
                          <label className="video-upload" htmlFor="video">
                            <img
                              src={require("assets/img/file-default.png")}
                              alt="pan-card"
                            />
                            <p>Upload the video here</p>
                          </label>
                          <input
                            type="file"
                            id="video"
                            style={{ display: "none" }}
                            accept="video/*"
                            onChange={videoChange}
                          />
                        </>
                      ) : (
                          <>
                            <div className="uploaded-video">
                              <p>{videoName}</p>
                              <div style={{ flexGrow: 5 }}></div>
                              <CircularProgress
                                variant="static"
                                value={fileProgress}
                              />
                              <IconButton onClick={videoDelete}>
                                <CloseIcon />
                              </IconButton>
                            </div>
                            <div style={{ display: 'flex' }}>
                              <span>{uploadSpeed}</span>
                              <div style={{ flex: 1 }}></div>
                              <span>{remainTime}</span>
                            </div>
                          </>
                        )}
                    </div>
                  )}
              </div>
              <div className="modal-footer">
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  className="submit-button"
                  onClick={submite}
                  disabled={(saveProcess || videoUrl === "") ? true : false}
                >
                  Submit
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
      <Dialog
        onClose={() => viewModalChange(false)}
        aria-labelledby="simple-dialog-title"
        open={videoViewOpen}
        className={classes.videoModal}
      >
        <iframe
          width="420"
          height="315"
          src={campaignData.video_url}
          title="This is a unique title"
        ></iframe>
      </Dialog>
      <Dialog
        fullScreen
        onClose={() => successModalChange(false)}
        aria-labelledby="simple-dialog-title"
        open={successModal}
        className={classes.videoModal}
      >
        <CamRegisterSuccess />
      </Dialog>
    </>
  );
}

export default CampaignRegister;
