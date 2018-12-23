import React from 'react';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import classNames from 'classnames';

import souvenirPic from "../../../images/souvenir.jpg";

const SouvenirItem=({classes, souvenir, onBuyClick})=>{
    return(
        <Grid item >
      <div className={classes.souvenirItem}>
      <div style={{width:"100%",height:"150px",background:"white"}}>
      <img src={souvenirPic} style={{width:"100%",height:"100%"}}/>
      </div>
      <div style={{textAlign:"center",fontWeight:"bold",fontSize:"16",padding:"10px"}}><span className={classes.timeSpan}>{souvenir.name}</span></div>
      <Button className={classes.buyButton} variant={"contained"} color={"primary"} onClick={()=>onBuyClick(souvenir.id)}>Купить</Button>
      </div>
      </Grid>)
}

export default SouvenirItem;