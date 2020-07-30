const campaignRegisterStyle = {
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    "& .MuiDialog-paper": {
      margin: "0px",
    },
  },
  paralex: {
    position: "fixed",
    width: "100%",
    height: "300px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& .video-play-btn": {
      width: 50,
      height: 50,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "white",
      borderRadius: "100px",
      cursor: "pointer",
      "&:hover": {
        boxShadow: "0px 0px 10px grey",
      },
      "& .play-icon": {
        borderLeft: "15px solid #324467",
        borderRight: "0px solid transparent",
        borderTop: "10px solid transparent",
        borderBottom: "10px solid transparent",
        marginLeft: "5px",
      },
    },
  },
  campaignContent: {
    zIndex: "10",
    padding: "20px",
    borderRadius: "30px 30px 0px 0px",
    background: "white",
    marginTop: "273px",
    "& .campaign-title": {
      display: "flex",
      "& *": {
        color: "grey",
      },
    },
    "& .campaign-intro": {
      marginTop: "30px",
      "& *": {
        color: "#324467",
      },
      "& h5": {
        fontWeight: "999",
      },
      "& .campaign-discription": {
        fontWeight: 400,
        marginTop: 20,
      },
    },
    "& .hurryup-message": {
      color: "#00aeef",
      fontWeight: "700",
      fontSize: "18px",
      padding: "10px",
      textAlign: "center",
      border: "1px dashed #00aeef",
    },
    "& .title": {
      textTransform: "none",
      fontWeight: "700",
      color: "#324467",
      marginBottom: "10px",
    },
    "& .start-line": {
      width: "100%",
      borderTop: "1px solid #dadada",
    },
    "& .campaign-step-list": {
      marginTop: "20px",
      "& .MuiTimelineItem-missingOppositeContent": {
        "&:before": {
          padding: '0px',
          flex: 0,
        },
      },
      "& .list-sub-title": {
        fontSize: 16,
        fontWeight: 700,
        textTransform: "none",
        color: "#324467",
      },
      "& .list-sub-dis": {
        fontSize: 14,
        fontWeight: 300,
        textTransform: "none",
        color: "#324467",
      },
      "& .list-dot-icon": {
        background: "#ffffff",
        "& svg": {
          color: "#00aeef",
        },
      },
      "& .passed": {
        background: "#ffffff",
        "& svg": {
          color: "#21c165",
        },
      },
    },
    "& .terms-condition": {
      marginTop: "30px",
    },
    "& .faqs": {
      marginTop: "30px",
    },
  },
  stepList: {
    "& .MuiTimelineItem-alignLeft": {
      padding: 0,
    },
    "& .list-dot-icon, .passed": {
      boxShadow: "none",
    },
    "& svg": {
      fontSize: "14px",
    },
  },
  footerPart: {
    borderTop: "1px solid #d0cece",
    background: "white",
    padding: "10px",
    "& .footer-button": {
      padding: "10px",
      fontSize: 20,
      fontWeight: "500",
      background: "#00aeef",
    },
  },
  uploadModal: {
    width: "100%",
    height: "100vh",
    background: "rgba(0, 0, 0, .6)",
    position: "fixed",
    zIndex: "10",
    top: 0,
    "& .modal-content": {
      position: "fixed",
      bottom: "0px",
      width: "100%",
      borderRadius: "30px 20px 0px 0px",
      background: "white",
      padding: "20px",
    },
    "& .modal-header": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      "& .header-title": {
        fontSize: "18px",
        fontWeight: "999",
        color: "#324467",
      },
    },
    "& .modal-campaign-info ": {
      display: "flex",
      "& .left-days": {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "grey",
      },
      "& .name": {
        marginLeft: "20px",
        borderRadius: "20px",
        border: "1px solid grey",
        padding: "0px 5px",
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        maxWidth: '50%'
      },
    },
    "& .modal-user-list": {
      display: "flex",
      alignItems: "center",
      "& img": {
        width: "50px",
        height: "50px",
        border: "2px solid white",
        borderRadius: "50px",
        marginRight: -25,
      },
      "& .more-user-num": {
        marginLeft: "33px",
        color: "grey",
      },
    },
    "& .modal-video-upload-option": {
      marginTop: "30px",
      "& p": {
        color: "#324467",
        fontWeight: "500",
      },
    },
    "& .modal-video-upload-part": {
      "& .video-info": {
        marginTop: '20px',
        borderRadius: '5px',
        border: '1px solid #cecbcb',
        overflow: 'hidden',
        "& img": {
          width: "100%",
        },
        "& .title": {
          fontSize: "18px",
          fontWeight: "700",
          color: "#324467",
        },
        "& .discription": {
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        },
      },
      "& .video-upload": {
        padding: "15px",
        borderRadius: 10,
        border: "1px dashed grey",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      },
      "& .uploaded-video": {
        border: "1px dashed #00aeef",
        color: "#324467",
        padding: "0px 10px",
        display: "flex",
        alignItems: "center",
        "& p": {
          margin: "0px",
        },
      },
    },
    "& .modal-footer": {
      padding: "20px 0px",
      "& .submit-button": {
        padding: "10px",
        fontSize: 18,
        fontWeight: "500",
        background: "#00aeef",
        "& .MuiButton-label": {
          color: "white",
        },
      },
    },
  },
  videoModal: {
    "& .MuiDialog-paper": {
      margin: 0,
    },
  },
  backButton: {
    position: "absolute",
    top: "10px",
    left: "10px",
    color: "white",
  },
};

export default campaignRegisterStyle;
