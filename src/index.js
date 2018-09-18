import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './style.css';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import SearchComponent from './containers/search';
import CityInfoComponent from './containers/cityinfo';
import {HeaderComponent} from './components/header';
import {SearchPageComponent} from './components/SearchPage';
import thunk from 'redux-thunk';
import allReducers from './reducers';


const middleware=applyMiddleware(thunk);
const store=createStore(allReducers,middleware);

const ComponentRouter=()=>(
<Router>
	<div>
  <Route exact path="/" component={SearchPageComponent} />
	<Route exact path="/city/:city_id" component={CityInfoComponent} />
	</div>
</Router>
);

const App=()=>(

	<div id='AppContainer'>
		<ComponentRouter/>
	</div>
	);


ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>
,
  document.getElementById('app')
);
module.hot.accept();
