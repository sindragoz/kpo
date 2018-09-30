import React from 'react';
import {searchCityAction, getSearchResultsAction,selectCityAction,getSelectedCityInfoAction} from '../actions/cityInfoAction';
import {connect} from 'react-redux';
import {CitySearchItem} from '../components/CitySearchItem';
import $ from 'jquery';
import mapael from 'jquery-mapael';
import 'jquery-mapael/js/maps/world_countries.js';
import AllCities from './allcities';

const image=require('../images/earth.png');
const searchimg=require('../images/search.png');
const pointimg=require('../images/point.png');

class SearchComponent extends React.Component {

  constructor(props){
    super(props);
    this.state={value:'',link:'', isEmptyValue:true,selectedCity:{},selectCityEvent:new Event('select'),unselectCityEvent:new Event('unselect')};
  }

  componentDidMount() {
    $(".mapcontainer").on('select', (e)=> {
                let plotId = 'plot-' + Math.round(Math.random() * 1000),
                    updateOptions = {'newPlots': {}},zoomOptions={};
                    if(!(this.props.searchResults===undefined||this.state.isEmptyValue)){
                      updateOptions.newPlots[plotId] = {
                            latitude: this.props.selectedCity.location.latlon.latitude,
                            longitude: this.props.selectedCity.location.latlon.longitude,
                            value: 500000000,
                            tooltip: {content: "Paris<br />Population: 500000000"}

                      }
                    zoomOptions={
                        latitude: this.props.selectedCity.location.latlon.latitude,
                        longitude: this.props.selectedCity.location.latlon.longitude,
                        level:3
                      }
                    }



                $(".mapcontainer").trigger('update', [updateOptions]);
                //$(".mapcontainer").trigger('zoom', zoomOptions);
            });
            $(".mapcontainer").on('unselect', (e)=> {
              let options = {
  mapOptions: {},             // was updatedOptions
  replaceOptions: false ,      // whether mapsOptions should entirely replace current map options, or just extend it,
  newPlots: {},               // was newPlots
  newLinks: {},               // was opt.newLinks
  deletePlotKeys: 'all',         // was deletedPlots
  deleteLinkKeys: 'all',         // was opt.deletedLinks
  setLegendElemsState: true,  // was opt.setLegendElemsState
  afterUpdate: function(){}   // was opt.afterUpdate
},zoomOptions={

    level:0
  }

                        $(".mapcontainer").trigger('update', [options]);
                        //$(".mapcontainer").trigger('zoom', zoomOptions);

                    });
    $(".mapcontainer").mapael({

        map: {
            name: "world_countries",
            zoom:{
              enabled:true,
              mousewheel:false,
              animDuration:50,
              step:0.2
            },
            defaultArea: {
                attrs: {
                    stroke: "#e2ffff",
                    "stroke-width": 1,
                    //fill:`url(${image})`
                    fill:"#e2ffff"
                },
                attrsHover:{fill:"#e2ffff",
                  "animDuration" : 0}
            },
            defaultPlot:{
              type:'image',
              width:'60',
              height:'60',
              url:`${pointimg}`
            }
        },
        plots: {
            // 'paris': {
            //     latitude: this.state.latitude,
            //     longitude: 2.3444,
            //     value: 500000000,
            //     tooltip: {content: "Paris<br />Population: 500000000"}
            // }

        },
    });

  }
  searchCity=(cityName)=>{
    this.props.searchCity(cityName);
    this.props.getSearchResults();
  }

  onChangeSearchText(event){
    this.setState({value:event.target.value});
    this.setState({isEmptyValue:event.target.value===''});
    this.searchCity(event.target.value);
  }
  onFoundCityMouseEnterHandler=(city)=>{
    this.props.selectCity(city._links['city:item'].href);
    this.props.getSelectedCityInfo();
  }
  componentDidUpdate(){
    if(this.props.selectedCity){
      mapcont.dispatchEvent(this.state.unselectCityEvent);
      mapcont.dispatchEvent(this.state.selectCityEvent);
      this.createCityLink();
    }
  }
  onFoundCityMouseLeaveHandler=(city)=>{
    if(this.props.selectedCity)
      mapcont.dispatchEvent(this.state.unselectCityEvent);
  }
  createCityLink=()=>{
    const link=`${this.props.selectedCity.geoname_id}`;

    if(link!==this.state.link)
    this.setState({link});
  }
  chooseCityHandle=name=>{
    this.searchCity(name.name);
    this.setState({value:name.name});
    this.setState({isEmptyValue:false});
  }
  render() {
    return (
    <div className='searchMapWrapper'>
      <div id='mapcont' className='mapcontainer'><div className='map'></div></div>

      <div className='SearchWrapper'>
        <div className='BorderSection'></div>
        <div className='SearchContainerWrapper'>
        <div className='SearchContainer'>
          <div>search for a city<br/></div>
        <div id='SearchInputContainer'>

          <input id='searchInput' type='text' placeholder='city name' value={this.state.value} onChange={this.onChangeSearchText.bind(this)}/>
          <img src={searchimg}/><br/>
          <AllCities chooseCityHandle={this.chooseCityHandle}/>
        </div>
      </div>
      <ul className='SearchResultsList'>
          {!(this.props.searchResults===undefined||this.state.isEmptyValue)?
            this.props.searchResults.map(city=>(<CitySearchItem key={city._links['city:item'].href} city={{...city,link:this.state.link}} onMouseLeaveHandler={this.onFoundCityMouseLeaveHandler} onMouseEnterHandler={this.onFoundCityMouseEnterHandler}/>)):<span></span>}
        </ul>
      </div>
      </div>
    </div>

    )
  }
}


function  mapDispatchToProps(dispatch){
  return {
    searchCity:(cityName)=>dispatch(searchCityAction(cityName)),
    getSearchResults:()=>dispatch(getSearchResultsAction()),
    selectCity:(cityLink)=>dispatch(selectCityAction(cityLink)),
    getSelectedCityInfo:()=>dispatch(getSelectedCityInfoAction()),

  }
}

function  mapStateToProps(state){
  return {
    searchResults:state.SearchInfo.searchResults,
    selectedCity:state.SearchedCityInfo.selectedCity,

  }
}
export default connect(mapStateToProps,mapDispatchToProps)(SearchComponent);
