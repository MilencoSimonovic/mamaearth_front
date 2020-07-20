import React from 'react';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
// @material-ui/core icon
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import CheckIcon from '@material-ui/icons/Check';
import ShopTwoIcon from '@material-ui/icons/ShopTwo';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import AspectRatioIcon from '@material-ui/icons/AspectRatio';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CloseIcon from '@material-ui/icons/Close';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';

//api 
import axios from 'axios';
//styles
import styles from 'assets/jss/material-kit-react/views/campaignRegisterStyle.js';
const useStyles = makeStyles(styles);
const user_list = [
    {
        id: '1',
        user_image: require('assets/img/1.jpg')
    },
    {
        id: '2',
        user_image: require('assets/img/2.png')
    },
    {
        id: '3',
        user_image: require('assets/img/3.jpg')
    },
    {
        id: '4',
        user_image: require('assets/img/4.jpg')
    }
]

function CampaignRegister(props) {
    const classes = useStyles();
    const [registerStep, setRegisterStep] = React.useState(0);
    const [videoType, setVideoType] = React.useState('url');
    const [videoUrl, setVideoUrl] = React.useState('');
    const [videoFile, setVideoFile] = React.useState(null);
    const [videoName, setVideoName] = React.useState('');
    const [videoData, setVideoData] = React.useState('');
    const [modalOpen, setModalOpen] = React.useState(false);

    function register() {
        setRegisterStep(1);
    }
    function videoUpload() {
        openVideoUpload(true);
        setRegisterStep(2);
    }
    function changeVideoType(e) {
        setVideoType(e.target.value);
    }
    function submite() {

    }
    function videoChange(e) {
        e.preventDefault();
        let newFile = e.target.files[0];
        console.log(newFile.name);
        setVideoFile(newFile);
        setVideoName(newFile.name);
    }
    function youtubeParser(url){
        var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
        var match = url.match(regExp);
        return (match&&match[7].length === 11)? match[7] : false;
    }
    function videoDelete() {
        setVideoName('');
        setVideoFile(null);
    }
    function youTubeChange(e) {
        setVideoUrl(e.target.value);
        const video_id = youtubeParser(e.target.value);
        console.log(video_id);
        axios.get(`https://www.googleapis.com/youtube/v3/videos?key=AIzaSyB9LJvtSahJiswIUZODkenQdA8rrSWbLFs&part=snippet&id=${video_id}`).then(res => {
            setVideoData(res.data.items[0].snippet)
        })
        .catch(error => {
            console.log(error);
        })
        // setVideoImage(video_url);
    }
    function openVideoUpload(value) {
        setModalOpen(value);
    }
    return (
        <div className={classes.container}>
            <div className={classes.paralex} style={{ backgroundImage: `url(${require('assets/img/1-2.jpg')})` }}>
                <div className="video-play-btn">
                    <div className="play-icon"></div>
                </div>
            </div>
            <div className={classes.campaignContent}>
                <div className="campaign-title">
                    <p>Travel</p>
                    <div style={{ flexGrow: 5 }}></div>
                    <p style={{ display: 'flex', alignItems: 'center' }}><AccessTimeIcon />Travel</p>
                </div>
                <div className="campaign-intro">
                    <Typography variant="h5" >[Campaign Name] will come here</Typography>
                    <p className="campaign-discription">Hello, this is campaign Hello, this is campaign Hello, this is campaign Hello, this is campaign
                    Hello, this is campaign Hello, this is campaign Hello, this is campaign Hello, this is campaign
                    Hello, this is campaign Hello, this is campaign Hello, this is campaign Hello, this is campaign
                    </p>
                </div>
                <div className="hurryup-message">
                    You can get upto Rs. 1000. Hurry up!!
                </div>
                <div className="campaign-step-list">
                    <Typography variant="subtitle2" className="title" >Step to follow</Typography>
                    <div className="start-line"></div>
                    <div>
                        <Timeline align="left">
                            <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineDot className={registerStep > 0 ? "passed" : "list-dot-icon"}>
                                        <CheckIcon />
                                    </TimelineDot>
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <Typography variant="subtitle2" className="list-sub-title">
                                        Register in the campaign
                                    </Typography>
                                    <Typography className="list-sub-dis">Please register to this campaign Please register to this campaign</Typography>
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineDot className="list-dot-icon">
                                        <ShopTwoIcon />
                                    </TimelineDot>
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <Typography variant="subtitle2" className="list-sub-title">
                                        Products arriving
                                    </Typography>
                                    <Typography className="list-sub-dis">Please register to this campaign Please register to this campaign</Typography>
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineDot className="list-dot-icon">
                                        <PlayArrowIcon />
                                    </TimelineDot>
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <Typography variant="subtitle2" className="list-sub-title">
                                        Video upload
                                    </Typography>
                                    <Typography className="list-sub-dis">Please register to this campaign Please register to this campaign</Typography>
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineDot className="list-dot-icon">
                                        <AspectRatioIcon />
                                    </TimelineDot>
                                </TimelineSeparator>
                                <TimelineContent>
                                    <Typography variant="subtitle2" className="list-sub-title">
                                        Campaign live
                                    </Typography>
                                    <Typography className="list-sub-dis">Please register to this campaign Please register to this campaign</Typography>
                                </TimelineContent>
                            </TimelineItem>
                        </Timeline>
                    </div>
                </div>
                <div className="terms-condition">
                    <Typography variant="subtitle2" className="title" >Terms and conditions</Typography>
                    <div className="start-line"></div>
                    <div className="terms-conditions-content">
                        <ul>
                            <li>Please register to this campaign Please register to this campaign</li>
                            <li>Please register to this campaign Please register to this campaign</li>
                            <li>Please register to this campaign Please register to this campaign</li>
                        </ul>
                    </div>
                </div>
                <div className="faqs">
                    <Typography variant="subtitle2" className="title" >FAQS</Typography>
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
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                sit amet blandit leo lobortis eget.
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
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                sit amet blandit leo lobortis eget.
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
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
            <div className={classes.footerPart}>
                {registerStep === 0 && (
                    <Button 
                        fullWidth
                        variant="contained"
                        color="primary"
                        className='footer-button'
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
                        className='footer-button'
                        onClick={videoUpload}
                    >
                        Video Upload
                    </Button>
                )}
            </div>
            {modalOpen && (
                <div className={classes.uploadModal}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <p className="header-title">Upload video</p>
                            <div style={{flexGrow: 5}}></div>
                            <IconButton onClick={() => openVideoUpload(false)}>
                                <CloseIcon />
                            </IconButton>
                        </div>
                        <div className="modal-campaign-info">
                            <span className="left-days"><QueryBuilderIcon/>30 days left</span>
                            <span className="name">Travel</span>
                        </div>
                        <div className="modal-user-list">
                            {user_list.map((item, i) => {
                                return(
                                    <img src={item.user_image} alt="user-avatar" key={i}/>
                                )
                            })}
                            <div className="more-user-num">+ {user_list.length-3} Joined</div>
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
                            {videoType === 'url' ? (
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
                                            <img src={videoData.thumbnails.medium.url} alt="video-back"/>
                                            <p className="title">{videoData.localized.title}</p>
                                            <p className="discription">{videoData.localized.description}</p>
                                        </div>
                                    )}
                                    
                                </div>
                            ) : (
                                <div>
                                    {videoName === '' ? (
                                        <>
                                            <label className="video-upload" htmlFor="video">
                                                <img src={require('assets/img/file-default.png')} alt="pan-card" />
                                                <p>Upload the video here</p>
                                            </label>
                                            <input type="file" id="video" style={{display: 'none'}} onChange={videoChange}/>
                                        </>
                                    ) : (
                                        <div className="uploaded-video">
                                            <p>{videoName}</p>
                                            <div style={{ flexGrow: 5}}></div>
                                            <IconButton onClick={videoDelete}>
                                                <CloseIcon />
                                            </IconButton>
                                        </div>
                                    )}
                                    
                                </div>
                            )}
                            
                        </div>
                        <div className="modal-footer">
                            <Button 
                                fullWidth
                                variant="contained"
                                color="primary"
                                className='submit-button'
                                onClick={submite}
                            >
                                Submite
                            </Button>
                        </div>
                    </div>
                </div>
            )}
            
        </div>
    )
}

export default CampaignRegister;