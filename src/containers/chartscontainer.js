import React from 'react';
import {ChartComponentLine, ChartComponentBar} from '../components/chart';

const smallhouseicon=require('../images/smallhouseicon.png');
const mediumhouseicon=require('../images/mediumhouseicon.png');
const largehouseicon=require('../images/largehouseicon.png');

export default class ChartsContainer extends React.Component{
  constructor(props){
    super(props);
    this.state={salary_id:0};
  }
mapSalariesToChartData=()=>{
  const salaries=this.props.data.salaries.slice();
  let salariesChartData=[];
  salaries.map((salary,id)=>{salariesChartData[id]={labels:['75%','50%','25%'],
    datasets:[{
      data:[{
        y:~~salary.salary_percentiles.percentile_25,
        x:25
      },
      {
        y:~~salary.salary_percentiles.percentile_50,
        x:50
      },
      {
        y:~~salary.salary_percentiles.percentile_75,
        x:75
      }],
                label:salary.job.title+'\'s salary for the year, $' ,
              borderColor:'blue',
            backgroundColor:'rgba(0,50,200,0.15)'}
    ]
  }});
  this.setState({salariesChartData});
}

mapScoresToChartData=()=>{
  const scores=this.props.data.scores_out_of_10.slice();
  let scoresValues=[];
  let scoresColors=[];
  let scoresLabels=[];
  let scoresChartData={};
  scores.map((score,id)=>{
    scoresValues[id]=score.score_out_of_10;
    scoresColors[id]=score.color;
    scoresLabels[id]=score.name;
  });

  scoresChartData={labels:scoresLabels,
  datasets:[{
    data:scoresValues,
    backgroundColor:scoresColors,
    label:'Score'
  }]}
  this.setState({scoresChartData});

}
componentDidMount(){
  this.mapSalariesToChartData();
  this.mapScoresToChartData();
}

onChangeSalaryHandle=event=>{

  let salary_id=0;
  this.props.data.salaries.find(salary=>{if(event.target.value==salary.job.title)salary_id=this.props.data.salaries.indexOf(salary)});
  this.setState({salary_id});

}

render(){

  if(this.state.salariesChartData&&this.state.scoresChartData){

  return(
  <div id='AdvancedInfoContainer'>
    <div id='housing'>
      <h2 style={{textAlign:'center'}}>Сost of housing</h2>
      <ul>
        <li><img className='HouseIcon SmallHouseIcon' src={smallhouseicon}/><br/>{this.props.data.housing[2].label}<br/><span>{this.props.data.housing[2].currency_dollar_value}$</span></li>
        <li><img className='HouseIcon MediumHouseIcon' src={mediumhouseicon}/><br/>{this.props.data.housing[1].label}<br/><span>{this.props.data.housing[1].currency_dollar_value}$</span></li>
        <li><img className='HouseIcon LargeHouseIcon' src={largehouseicon}/><br/>{this.props.data.housing[0].label}<br/><span>{this.props.data.housing[0].currency_dollar_value}$</span></li>
      </ul>
    </div>
    <div className='ChartContainer' >
        <h2>Job salary</h2>
        <div id='SalaryChartContainer'>
        <select onChange={(event)=>this.onChangeSalaryHandle(event)}>
          {this.props.data.salaries.map(salary=>(<option key={salary.job.id}>{salary.job.title}</option>))}
        </select>
        <ChartComponentLine data={this.state.salariesChartData[this.state.salary_id]}/>
        <div>AVG SALARY: {this.state.salariesChartData[this.state.salary_id].datasets[0].data[1].y}$</div>
      </div>
  </div>
  <br/>
    <div className='ChartContainer' >
      <div id='ScoreChartContainer'>
        <h2>Life quality score</h2>
        <ChartComponentBar data={this.state.scoresChartData}/>
      </div>
    </div>

  </div>
)}
  return(<div/>)
}
}
