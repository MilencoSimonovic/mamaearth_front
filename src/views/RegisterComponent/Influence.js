import React from 'react';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
// core components
import GridContainer from "components/Grid/GridContainer.js";
// import GridItem from "components/Grid/GridItem.js";
//api 
import axios from 'axios';
// style 
import styles from 'assets/jss/material-kit-react/views/influencPage.js';
const useStyles = makeStyles(styles);
const categroy = [
    'Hari', 'Face', 'Skin', 'Makeup', 'Travel', 'Beauty', 'Fashion Tips', 'Photography', 'Styling Tips'
]

function Influence(props) {
    const classes = useStyles();
    const [categroyList, setCategoryList] = React.useState([]);
    const [event, setEvent] = React.useState(false);

    function categorySelect(value) {
        var category_list = categroyList;
        if (!category_list.includes(value)) {
            category_list.push(value);
        }
        else {
            const index = category_list.indexOf(value);
            if (index > -1) {
                category_list.splice(index, 1);
            }
        }
        setEvent(!event);
        setCategoryList(category_list);
    }
    function registerUser() {
        const data = {
            uid: props.user_id,
            updateData: {
                "categories": categroyList
            }
        }
        axios.post(`${window.$host_url}account/update`, data)
            .then(res => {
                props.stepChange(2)
            })
            .catch(err => {
                console.log(err)
            })
    }
    React.useEffect(() => {
    }, [])
    return (
        <GridContainer className={classes.content}>
            <div className={classes.headerPart}>
                <h2 className="title">What is your area of influence</h2>
                <div className="sub-title">Select at least 3 category</div>
            </div>
            <div className={classes.mainContent}>
                {categroy.map(function (item, i) {
                    return (
                        <div
                            className={`category-item ${categroyList.includes(item) ? "category-item-select" : ""}`}
                            onClick={() => categorySelect(item)}
                            key={i}
                        >
                            {item}
                        </div>
                    )
                })}
            </div>
            <div className={classes.footerPart}>
                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    className='footer-button'
                    onClick={() => registerUser()}
                    disabled={categroyList.length < 3}
                >
                    LETS GO
                </Button>
            </div>
        </GridContainer>
    )
}

export default Influence;