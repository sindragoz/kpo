export default function SearchedCityInfo(state=[],action){
	switch(action.type){
		case "CHANGE_SELECTED_CITY":
		return {...state,selectedCity:action.payload};
		case "GET_SELECTED_CITY":
		default:
		return state;
		}

}
