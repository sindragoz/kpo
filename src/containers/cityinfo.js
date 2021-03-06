import React from 'react';
import axios from 'axios';
import {getCityDetailsLinkAction,getCityDescriptionAction,getCityPhotoAction,getCityDetailsAction} from '../actions/cityInfoAction';
import {connect} from 'react-redux';
import {Logo} from '../components/logo';
import {ErrorComponent} from '../components/error';
import ChartsContainer from './chartscontainer';
class CityInfoComponent extends React.Component {

  constructor(props){
    super(props);
    this.state={city:{}};
  }

  componentDidMount() {

    this.props.getCityDetailsLink(this.props.match.params.city_id);
  }


  render() {
    const noData='no data';
    if(this.props.details&&this.props.descr&&this.props.photo&&this.props.salaries&&this.props.status!=='error'){
      const weather=this.props.details.find(detail => detail.id === 'CLIMATE').data.find(item=>item.id=='WEATHER-TYPE')?
      this.props.details.find(detail => detail.id === 'CLIMATE').data.find(item=>item.id=='WEATHER-TYPE').string_value:noData;
      const currency=this.props.details.find(detail => detail.id === 'ECONOMY').data.find(item=>item.id=='CURRENCY-URBAN-AREA')?
      this.props.details.find(detail => detail.id === 'ECONOMY').data.find(item=>item.id=='CURRENCY-URBAN-AREA').string_value:noData;
      const language=this.props.details.find(detail => detail.id === 'LANGUAGE').data.find(item=>item.id=='SPOKEN-LANGUAGES')?
      this.props.details.find(detail => detail.id === 'LANGUAGE').data.find(item=>item.id=='SPOKEN-LANGUAGES').string_value:noData;
      const housing=this.props.details.find(detail => detail.id === 'HOUSING').data?
      this.props.details.find(detail => detail.id === 'HOUSING').data:noData;
    return (
    <div id='CityPageWrapper'>
      <div className='cityHeader'><Logo/></div>
      <div className='CityInfoContainer'>
        <div className='CityPrimaryInfoContainer'>
          <h3>Primary information</h3>
          <div>
          <h4>Country:</h4>
          {this.props.country}
          <h4>Population:</h4>
          {this.props.population}
          <h4>Language:</h4>
          {language}
          <h4>Weather:</h4>
          {weather}
          <h4>Currency:</h4>
          {currency}
          </div>
        </div>
        <div className='CityPhoto' style={{backgroundImage:`url('${this.props.photo}')`}}>
          <div className='PhotoColorFilter'>
          </div>
          <div id='rating'><div>score :</div>
            <div>{Math.round(this.props.rating*10)/10}</div>
          </div>
          <div id='city-descr'><h2>{this.props.name}</h2>
          <div id='city-descr-text' dangerouslySetInnerHTML={{__html: this.props.descr}}></div>
          </div>
        </div>
        <div className='clear'/>

    </div>
    <ChartsContainer data={{salaries:this.props.salaries,scores_out_of_10:this.props.scores_out_of_10,housing:housing}}/>
    </div>

  );
}
  return (<div>
            <div className='cityHeader'><Logo/></div>
            <div id='error'><ErrorComponent/></div>
          </div>);
  }
}

function  mapDispatchToProps(dispatch){
  return {
    getCityDetailsLink:(cityid)=>dispatch(getCityDetailsLinkAction(cityid)),
    getCityDescription:(links)=>dispatch(getCityDescriptionAction(links)),
    getCityPhoto:(links)=>dispatch(getCityPhotoAction(links)),
    getCityDetails:(links)=>dispatch(getCityDetailsAction(links))
  }
}

function  mapStateToProps(state){
  return {
    country:state.CurrentCityInfo.country,
    descr:state.CurrentCityInfo.descr,
    rating:state.CurrentCityInfo.rating,
    photo:state.CurrentCityInfo.photo,
    details:state.CurrentCityInfo.details,
    population:state.CurrentCityInfo.population,
    name:state.CurrentCityInfo.name,
    status:state.CurrentCityInfo.status,
    salaries:state.CurrentCityInfo.salaries,
    scores_out_of_10:state.CurrentCityInfo.scores_out_of_10
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CityInfoComponent);
