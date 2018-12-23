import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route, Link ,Switch} from "react-router-dom";

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import allReducers from './store';

import MainPage from "./components/MainPage";
import Shedule from "./components/Shedule";
import Souvenir from "./components/Souvenirs";
import Cabinet from "./components/Cabinet";


import './style.css';


const middleware=applyMiddleware(thunk);
const store=createStore(allReducers,middleware);

const ComponentRouter=()=>(
<Router>
<Switch>

  <Route exact path="/" component={MainPage} />
  <Route exact path="/shedule" component={Shedule} />
  <Route exact path="/souvenir" component={Souvenir}/>
  <Route exact path="/cabinet" component={Cabinet}/>

  </Switch>
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
