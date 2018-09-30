import React from 'react';

export const GeographicUnitComponent=(props)=>(
  <li onClick={(event)=>{props.chooseUnitHandle(props.unit,event)}}>{props.unit.name}</li>
)
