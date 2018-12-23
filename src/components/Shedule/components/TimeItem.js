import React from 'react';

import Grid from '@material-ui/core/Grid';

import classNames from 'classnames';

const TimeItem=({classes, timeItem, onSelect,isSelected})=>{
    return(
        <Grid item >
      <div className={isSelected?classes.timeSelected:classes.timeItem} onClick={()=>onSelect(timeItem)}>
      <span className={classes.timeSpan}>{timeItem.hour}</span><br/>
      <span>мест: {timeItem.seat_count}</span>
      </div>
      </Grid>)
}

export default TimeItem;