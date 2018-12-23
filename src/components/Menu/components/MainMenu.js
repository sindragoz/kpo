import React from 'react';

import { Link } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import bgImage from "../../../images/main_bg.jpg";
import logo from "../../../images/logo.png";

import classNames from 'classnames';

const styles = {
  root: {

  },
  menu:{
    height:100,
  },
  gridMenuBlock:{
    fontSize:24,
    color:"lightBlue",
    textTransform:"uppercase",
    fontFamily:"sans-serif"
  },
  gridMenuItem:{
    "&:hover":{
      color:"aquamarine",
      cursor:"pointer"
    }
  },
  logo:{
    marginTop:40
  },
  logoPic:{
    width:135,
    height:120,
    cursor:"pointer"
  }
};

export default withStyles(styles)((props)=>{
  const {classes}=props;
  return(
  <Grid container
      justify={"space-evenly"}
      alignItems={"center"}
            direction={"row"}
            className={classes.menu}>
      <Grid item>
      <Grid container 
            spacing={40}
            alignItems={"center"}
            direction={"row"}
            justify={"center"}
            className={classes.gridMenuBlock}
            >
        <Grid item className={classes.gridMenuItem}>
        <div ><Link to="/" style={{color:"inherit",textDecoration:"inherit"}}>Главная</Link></div>
        </Grid>
        <Grid item className={classes.gridMenuItem}>
        <div ><Link to="/shedule" style={{color:"inherit",textDecoration:"inherit"}}><span>Расписание</span></Link></div>
        </Grid>
      </Grid>
      </Grid>


      <Grid item>
      <Grid container 
            
            alignItems={"center"}
            direction={"row"}
            justify={"center"}
            >
        <Grid item>
          <div className={classes.logo}><Link to="/" style={{color:"inherit",textDecoration:"inherit"}}><img src={logo} className={classes.logoPic}/></Link></div>
        </Grid>
        
      </Grid>
      </Grid>


      <Grid item>
      <Grid container 
            spacing={40}
            alignItems={"center"}
            direction={"row"}
            justify={"center"}
            className={classes.gridMenuBlock}
            >
        <Grid item className={classes.gridMenuItem}>
          <div ><Link to="/souvenir" style={{color:"inherit",textDecoration:"inherit"}}>Сувениры</Link></div>
        </Grid>
        <Grid item className={classes.gridMenuItem}>
          <div ><Link to="/about" style={{color:"inherit",textDecoration:"inherit"}}>О нас</Link></div>
        </Grid>
      </Grid>
      </Grid>
      </Grid>)})