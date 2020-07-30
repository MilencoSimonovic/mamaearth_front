import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/Home";
import CameraIcon from "@material-ui/icons/Camera";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import ShareIcon from "@material-ui/icons/Share";
import PersonIcon from "@material-ui/icons/Person";

const useStyles = makeStyles({
  root: {
    width: "100%",
    borderTop: "1px solid #dee0de",
    "& .Mui-selected": {
      color: "#f53acd",
    },
  },
});

export default function SimpleBottomNavigation(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(-1);
  function tabChange(newValue) {
    setValue(newValue);
    if (newValue === 0) {
      props.pageRouter.push("/");
    } else if (newValue === 1) {
      props.pageRouter.push("/campain");
    } else if (newValue === 2) {
      props.pageRouter.push("/learn");
    } else if (newValue === 4) {
      props.pageRouter.push("/profile");
    }
  }
  React.useEffect(() => {
    if (props.link === "home") {
      setValue(0);
    } else if (props.link === "campaign") {
      setValue(1);
    } else if (props.link === "learn") {
      setValue(2);
    } else if (props.link === "profile") {
      setValue(4);
    }
  }, [props.link]);
  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        tabChange(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Home" icon={<HomeIcon />} />
      <BottomNavigationAction label="Campains" icon={<CameraIcon />} />
      <BottomNavigationAction label="Learn" icon={<MenuBookIcon />} />
      <BottomNavigationAction label="Refer" icon={<ShareIcon />} />
      <BottomNavigationAction label="Profile" icon={<PersonIcon />} />
    </BottomNavigation>
  );
}
