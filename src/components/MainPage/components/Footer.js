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
   width:"100%",
   color:"white",
   textAlign:"center",
  },
  card:{
      width:200,
      
      position:"absolute",
      bottom:"50px",

      
  }
  
};


export default withStyles(styles)((props)=>{
    const {classes}=props;
    return(
        <React.Fragment>
        <Grid container
      justify={"space-evenly"}
      alignItems={"center"}
            direction={"row"}
            className={classes.gridMenuBlock}
            spacing={40}>
      <Grid item>

          <div className={classes.card}>
          <h2>Heading 2</h2>

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.
          </div>

      </Grid>
      <Grid item>

          <div className={classes.card}>
          <h2>Heading 2</h2>

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.
          </div>

      </Grid>
      <Grid item>
      
          <div className={classes.card}> 
          <h2>Heading 2</h2>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.
          </div>
      
      </Grid>
      </Grid>
      <div style={{color:"white",position:"absolute",bottom:"10px",textAlign:"center",marginLeft:"10%",width:"89%"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.</div>
      </React.Fragment>
    )
})

