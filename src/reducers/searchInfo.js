export default function SearchInfo(state=[],action){
	switch(action.type){

		case "SEARCH_CITY":
		if (action.status=='processing')
			return {...state, searchStatus:action.status};
		if(action.status=='success')
			return {...state,searchResults:action.payload, searchStatus:action.status};
		return {...state,searchResults:action.payload, searchStatus:action.status,searchError:action.error};

		case "GET_CONTINENTS":
		if (action.status=='processing')
			return {...state, continentsStatus:action.status};
		if(action.status=='success')
			return {...state,continents:action.payload, continentsStatus:action.status};
		return {...state, continentsStatus:action.status,continentsError:action.error};

		case "GET_COUNTRIES_LIST":
		if (action.status=='processing')
			return {...state, countriesStatus:action.status};
		if(action.status=='success')
			return {...state,countries:action.payload, countriesStatus:action.status};
		return {...state, countriesStatus:action.status,countriesError:action.error};

		case "GET_ADMIN_DIVISIONS_LIST":
		if (action.status=='processing')
			return {...state, divisionsStatus:action.status};
		if(action.status=='success')
			return {...state,divisions:action.payload, divisionsStatus:action.status};
		return {...state, divisionsStatus:action.status,divisionsError:action.error};

		case "GET_DIVISION_CITIES_LIST":
		if (action.status=='processing')
			return {...state, citiesStatus:action.status};
		if(action.status=='success')
			return {...state,cities:action.payload, citiesStatus:action.status};
		return {...state, citiesStatus:action.status,citiesError:action.error};

		case "CLEAR_RESULTS":
		return {...state, countries:undefined,divisions:undefined,cities:undefined};

		case "GET_SEARCH_RESULT":
		default:
		return state;
		}

}
