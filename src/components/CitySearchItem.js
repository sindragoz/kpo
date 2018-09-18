import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export const CitySearchItem=props=>(
    <li onMouseEnter={()=>props.onMouseEnterHandler(props.city)} onMouseLeave={()=>props.onMouseLeaveHandler(props.city)}>
      <Link to={`/city/${props.city.link}`}>{props.city.matching_full_name}</Link>
    </li>
);
