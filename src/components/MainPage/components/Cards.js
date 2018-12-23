import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import classNames from 'classnames';

import card1 from "../../../images/card1.jpg";
import card2 from "../../../images/card2.jpg";
import card3 from "../../../images/card3.jpg";

const styles = {

  gridMenuBlock:{
   marginTop:150,
   width:"100%"

  },
  card:{
      width:300,
      height:400,
      "&:hover":{
      boxShadow: "0px 0px 25px 0px rgba(255,255,255,.5)"
      }
  }
  
};


export default withStyles(styles)((props)=>{
    const {classes}=props;
    return(
        <Grid container
      justify={"space-evenly"}
      alignItems={"center"}
            direction={"row"}
            className={classes.gridMenuBlock}
            spacing={40}>
      <Grid item>
      <Paper>
          <div className={classes.card}>
          <img src={card1} style={{width:"100%",height:"100%"}}/>
          </div>
      </Paper>
      </Grid>
      <Grid item>
      <Paper>
          <div className={classes.card}>
          <img src={card2} style={{width:"100%",height:"100%"}}/>
          </div>
      </Paper>
      </Grid>
      <Grid item>
      <Paper>
          <div className={classes.card}> 
            <img src={card3} style={{width:"100%",height:"100%"}}/>
          </div>
      </Paper>
      </Grid>
      </Grid>
    )
})