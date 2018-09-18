export default function SearchInfo(state=[],action){
	switch(action.type){
		case "SEARCH_CITY":
		if (action.status=='processing')
			return {...state,searchResults:action.payload, status:action.status};
		if(action.status=='success')
			return {...state,searchResults:action.payload, status:action.status};
		return {...state,searchResults:action.payload, status:action.status,error:action.error};
		case "GET_SEARCH_RESULT":
		default:
		return state;
		}

}
