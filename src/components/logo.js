import React from 'react';
const logo=require('../images/logo.png');
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export const Logo=()=>(
      <p>
        <Link to='/'>telep<img src={logo}/>rt</Link>
      </p>
);
