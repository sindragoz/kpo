import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import LinearProgress from '@material-ui/core/LinearProgress';

const styles = {
  progress:{
    display:"block",
    width:"100%",
    position:"fixed",
    top:0
  },
  hidden:{
    display:"none"
  }
};

export default withStyles(styles)((props)=>(
    <LinearProgress className={props.show?props.classes.propgress:props.classes.hidden}/>
));
