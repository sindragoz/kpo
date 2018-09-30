import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import {connect} from 'react-redux';
import {GeographicUnitComponent} from '../components/continent'
import { selectCityAction,getSelectedCityInfoAction,getContinentsAction,getCountriesAction,getAdminDivisionsAction,getCitiesAction, clearResultsAction} from '../actions/cityInfoAction';
class AllCities extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      modalIsOpen: false
    };
  }
  openModal=()=> {
    this.setState({modalIsOpen: true});
    this.props.clearResults();
  }
  closeModal=()=> {
    this.setState({modalIsOpen: false});
  }
  afterOpenModal=()=> {
    this.subtitle.style.color = '#f00';
    //          onAfterOpen={this.afterOpenModal}
  }
  componentDidMount(){
    Modal.setAppElement('#SearchInputContainer');
    this.props.getContinents();
  }

  chooseContinentHandle=(continent,event)=>{
    if(document.getElementById('selectedContinent')!=null)
    document.getElementById('selectedContinent').removeAttribute( "id");
    event.target.setAttribute( "id", "selectedContinent" );
    this.props.getCountries(continent.href);
  }
  chooseCountryHandle=(country,event)=>{
    if(document.getElementById('selectedCountry')!=null)
    document.getElementById('selectedCountry').removeAttribute( "id");
    event.target.setAttribute( "id", "selectedCountry" );
    this.props.getAdminDivisions(country.href);
  }
  chooseDivisionHandle=(division,event)=>{
    if(document.getElementById('selectedDivision')!=null)
    document.getElementById('selectedDivision').removeAttribute( "id");
    event.target.setAttribute( "id", "selectedDivision" );
    this.props.getCities(division);
  }
  chooseCityHandle=(name,event)=>{
    this.props.chooseCityHandle(name);
    this.closeModal();
  }
  render(){
    if(this.props.continents)
    return(
      <div>
        <span id='modalBtn' onClick={this.openModal}>or use advanced search</span>
        <Modal
          isOpen={this.state.modalIsOpen}

          onRequestClose={this.closeModal}
          className='allCitiesModal'
          contentLabel="Example Modal"
          overlayClassName='allCitiesModalOverlay'
        >
        <div className='ModalContainer'>
          <div className="ModalRow">
            <h2>Continents</h2>
            <ul>
            {this.props.continents.map(continent=>(<GeographicUnitComponent key={continent.name} unit={continent} chooseUnitHandle={this.chooseContinentHandle}/>))}
            </ul>
          </div>
          <div className="ModalRow">
            <h2>Countries</h2>
            <ul>
            {this.props.countries?this.props.countries.map(country=>(<GeographicUnitComponent key={country.name} unit={country} chooseUnitHandle={this.chooseCountryHandle}/>)):<li></li>}
            </ul>
          </div>
          <div className="ModalRow">
            <h2>Divisions</h2>
            <ul>
            {this.props.divisions?this.props.divisions.map(division=>(<GeographicUnitComponent key={division.name} unit={division} chooseUnitHandle={this.chooseDivisionHandle}/>)):<li></li>}
            </ul>
          </div>
          <div className="ModalRow">
            <h2>Cities</h2>
            <ul>
            {this.props.cities?this.props.cities.map(city=>(<GeographicUnitComponent key={city.name} unit={city} chooseUnitHandle={(name)=>this.chooseCityHandle(name)}/>)):<li></li>}
            </ul>
          </div>
        </div>
        </Modal>
      </div>
    );

    return(
      <div>
      </div>
    )
  }
}

function  mapDispatchToProps(dispatch){
  return {
    selectCity:(cityLink)=>dispatch(selectCityAction(cityLink)),
    getSelectedCityInfo:()=>dispatch(getSelectedCityInfoAction()),
    getContinents:()=>dispatch(getContinentsAction()),
    getCountries:(href)=>dispatch(getCountriesAction(href)),
    getAdminDivisions:(href)=>dispatch(getAdminDivisionsAction(href)),
    getCities:(href)=>dispatch(getCitiesAction(href)),
    clearResults:()=>dispatch(clearResultsAction())
  }
}

function  mapStateToProps(state){
  return {
    selectedCity:state.SearchedCityInfo.selectedCity,
    continents:state.SearchInfo.continents,
    countries:state.SearchInfo.countries,
    adminDivisions:state.SearchInfo.adminDivisions,
    divisions:state.SearchInfo.divisions,
    cities:state.SearchInfo.cities
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(AllCities);


/*            <button onClick={()=>this.props.getContinents()}>continents</button>
            <button onClick={()=>this.props.getCountries(this.props.continents[3].href)}>countries</button>
            <button onClick={()=>this.props.getAdminDivisions(this.props.countries[41].href)}>divisions</button>
            <button onClick={()=>this.props.getCities(this.props.divisions[2])}>cities</button>
            */
