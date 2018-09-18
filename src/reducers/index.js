import {combineReducers} from 'redux';
import SearchInfo from './searchInfo';
import SearchedCityInfo from './searchedCityInfo';
import CurrentCityInfo from './currentCityInfo';

const allReducers=combineReducers({
	SearchInfo,
	SearchedCityInfo,
	CurrentCityInfo
});

export default allReducers;
