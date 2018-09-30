export default function CurrentCityInfo(state=[],action){
	switch(action.type){
		case "GET_CITY_DETAILS_LINK":
			if (action.status=='error')
				return {...state,status:action.status,error:action.error};
			return {...state,status:action.status};
    case "GET_CITY_PRIMARY_INFO":
			if (action.status=='processing')
				return {...state,infoStatus:action.status};
			if(action.status=='success')
				return {...state,name:action.payload.name,population:action.payload.population,country:action.payload.country,latlon: action.payload.latlon,infoStatus:action.status};
			return {...state,infoStatus:action.status,infoError:action.error};
    case "GET_CITY_DESCRIPTION":
			if (action.status=='processing')
				return {...state,descrStatus:action.status};
			if(action.status=='success')
			  return {...state,descr:action.payload.descr,rating:action.payload.rating,descrStatus:action.status,scores_out_of_10:action.payload.scores_out_of_10};
			return {...state,descrStatus:action.status,descrError:action.error};
    case "GET_CITY_PHOTO":
			if (action.status=='processing')
				return {...state,photoStatus:action.status};
			if(action.status=='success'){
				return {...state,photo:action.payload,photoStatus:action.status};
			}
			return {...state,photoStatus:action.status,photoError:action.error};
    case "GET_CITY_DETAILS":
			if (action.status=='processing')
				return {...state,detStatus:action.status};
			if(action.status=='success')
				return {...state,details:action.payload,detStatus:action.status};
			return {...state,detStatus:action.status,detError:action.error};
			case "GET_CITY_SALARIES":
				if (action.status=='processing')
					return {...state,salStatus:action.status};
				if(action.status=='success')
					return {...state,salaries:action.payload,salStatus:action.status};
				return {...state,salStatus:action.status,salError:action.error};
			case "GET_NEARBY_CITIES":
				if (action.status=='processing')
					return {...state,nbStatus:action.status};
				if(action.status=='success')
					return {...state,salaries:action.payload,nbStatus:action.status};
				return {...state,nbStatus:action.status,nbError:action.error};
		default:
		return state;
		}

}
