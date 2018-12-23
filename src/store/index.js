import {combineReducers} from 'redux';
import Shedule from './reducers/shedule';
import Souvenir from './reducers/Souvenir';
import User from './reducers/user';
import Order from './reducers/order';


const allReducers=combineReducers({
	Shedule,
	User,
	Souvenir,
	Order
});

export default allReducers;
