import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Doughnut, Bar,Line, HorizontalBar} from 'react-chartjs-2';

export const ChartComponentLine=props=>(
  <div >

    <Line
    	data={props.data}

    	options={{
    		maintainAspectRatio: true
    	}}
    />
  </div>
)

export const ChartComponentBar=props=>(
  <div >

    <HorizontalBar
    	data={props.data}

    	options={{
    		maintainAspectRatio: true,
        scales: {
        xAxes: [{
            barThickness:200,
            gridLines: {
                offsetGridLines: true
            }
        }]
    }
    	}}
    />
  </div>
)
