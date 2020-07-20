import React from 'react';
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
// @material-ui/core icon
import SearchIcon from '@material-ui/icons/Search';
// style 
import styles from 'assets/jss/material-kit-react/components/headStyle.js';
const useStyles = makeStyles(styles);

function Header(props) {
    const {
        backIcon,
        title,
        back,
        search,
        searchChange
    } = props
    const classes = useStyles();
    const [searchView, setSearchView] = React.useState(false);

    const goBack = () => {
        props.history.goBack();
    }

    React.useEffect(() => {
    }, [])
    return(
        <AppBar position="fixed" color="default" className={classes.appBar} >
            <Toolbar>
                
                {searchView ? (
                    <InputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                        onChange={(e) => {searchChange(e.target.value)}}
                        style={{flexGrow: 5}}
                    />
                ) : (
                    <>
                        {back && (
                            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={() => goBack()}>
                                {backIcon}
                            </IconButton>
                        )}
                        <Typography variant="h6" className="app-title" style={{flexGrow: 5}}>
                            {title}
                        </Typography>
                    </>
                )}
                {search && (
                    <IconButton
                        color="inherit"
                        onClick={() => {setSearchView(!searchView)}}
                    >
                        <SearchIcon />
                    </IconButton>
                )}
            </Toolbar>
        </AppBar>
    )
}

Header.propTypes = {
    title: PropTypes.string,
    backIcon: PropTypes.node,
    back: PropTypes.bool,
    serch: PropTypes.bool,
    searchChange: PropTypes.func
};
export default Header;