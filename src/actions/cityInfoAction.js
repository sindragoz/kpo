import axios from 'axios';
import {apiInfo} from '../ApiInfo';


export const selectCityAction=(cityItemLink)=>(dispatch)=>{
    // dispatch({type:"GETTING_CITY_INFO"});
    axios.get(cityItemLink)
      .then(response => {
      dispatch({type:'CHANGE_SELECTED_CITY',payload:response.data});
      })
}

export const getSelectedCityInfoAction=()=>(dispatch)=>{
    return {type:'GET_SELECTED_CITY'};
}

export const getSearchResultsAction=()=>dispatch=>{
    return {type:'GET_SEARCH_RESULT'};
}

export const searchCityAction=(cityName)=>(dispatch)=>{
    dispatch({type:"SEARCH_CITY",status:'processing'});
    axios.get(`${apiInfo.search}${cityName}&limit=5`)
      .then(response =>{
      dispatch({type:'SEARCH_CITY',status:'success', payload:response.data._embedded["city:search-results"]});
    }).catch(ex=>{
      dispatch({type:'SEARCH_CITY',status:'error',error:ex});
    })
}

export const getCityDetailsLinkAction=(cityid)=>dispatch=>{
  dispatch({type:"GET_CITY_DETAILS_LINK",status:'processing'});
  axios.get(apiInfo.infoLink+''+cityid+'/')
    .then(response => {
    dispatch(getCityPrimaryInfoAction(response));
  }).catch(ex=>{
    dispatch({type:'GET_CITY_DETAILS_LINK',status:'error',error:ex});
  })

}
export const getCityPrimaryInfoAction=(city)=>dispatch=>{
  dispatch({type:"GET_CITY_PRIMARY_INFO",status:'processing'});
  axios.get(`${city.data._links['city:urban_area'].href}`).then(response=>{
      dispatch(getCityDescriptionAction(response.data._links));
      dispatch(getCityPhotoAction(response.data._links));
      dispatch(getCityDetailsAction(response.data._links));
      dispatch(getCitySalariesAction(response.data._links));
      dispatch({type:'GET_CITY_PRIMARY_INFO',status:'success',payload:
      {
        links:response.data._links,
        name:city.data.name,
        population:city.data.population
      }
      });

  }).catch(ex=>{
    dispatch({type:'GET_CITY_PRIMARY_INFO',status:'error',error:ex});
  });
}

export const getCityDescriptionAction=(links)=>dispatch=>{
  dispatch({type:"GET_CITY_DESCRIPTION",status:'processing'});
    axios.get(`${links['ua:scores'].href}`).then(response=>{
      dispatch({type:'GET_CITY_DESCRIPTION',status:'success',payload:{descr:response.data.summary,rating:response.data.teleport_city_score,scores_out_of_10:response.data.categories}});
    }).catch(ex=>{
      dispatch({type:'GET_CITY_DESCRIPTION',status:'error',error:ex});
    });
}
export const getCityPhotoAction=(links)=>dispatch=>{
  dispatch({type:"GET_CITY_PHOTO",status:'processing'});
    axios.get(`${links['ua:images'].href}`).then(response=>{
      dispatch({type:'GET_CITY_PHOTO',status:'success',payload:response.data.photos[0].image.mobile});
    }).catch(ex=>{
      dispatch({type:'GET_CITY_PHOTO',status:'error',error:ex});
    });
}
export const getCityDetailsAction=(links)=>dispatch=>{
  dispatch({type:"GET_CITY_DETAILS",status:'processing'});
    axios.get(`${links['ua:details'].href}`).then(response=>{
      dispatch({type:'GET_CITY_DETAILS',status:'success',payload:response.data.categories});
    }).catch(ex=>{
      dispatch({type:'GET_CITY_DETAILS',status:'error',error:ex});
    });
}
export const getCitySalariesAction=(links)=>dispatch=>{
  dispatch({type:"GET_CITY_SALARIES",status:'processing'});
    axios.get(`${links['ua:salaries'].href}`).then(response=>{
      dispatch({type:'GET_CITY_SALARIES',status:'success',payload:response.data.salaries});
    }).catch(ex=>{
      dispatch({type:'GET_CITY_SALARIES',status:'error',error:ex});
    });
}
