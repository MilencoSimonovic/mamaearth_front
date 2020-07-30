import axios from 'axios';

export function authCheck(){
    console.log(1231231)
    if(localStorage.user_id === undefined) {
        return false
    }
    else {
        axios.post(`${window.$host_url}loginCheck`, {uid: localStorage.user_id})
        .then(res => {
            console.log(res);
            return res.data
        })
        .catch(err => {
            console.log(err)
        })
    }
}