import React from 'react';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

import classNames from 'classnames';

import souvenirPic from "../../../images/souvenir.jpg";

const UserInfo = ({ classes, user }) => {
    return (
        <div>
            <div style={{ textAlign: "center", fontWeight: "bold", fontSize: "16", padding: "10px" }}>
                <p style ={{display:"inline-block", padding:50,paddingTop:10, marginTop:50, background:"white"}}>
                <h1 style={{paddingBottom:50,textDecoration:"underline",fontFamily:"sans-serif"}}>Информация о пользователе:</h1>
                    <span className={classes.userInfoItem}>{"Имя: " + user.name}</span><br />
                    <span className={classes.userInfoItem}>{"Логин: " + user.login}</span><br />
                    <span className={classes.userInfoItem}>{"Электронная почта: " + user.email}</span><br />
                </p>
            </div>
        </div>
    )
}

export default UserInfo;