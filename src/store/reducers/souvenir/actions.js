//http://localhost/planetary/shedule/?day_id=1

import axios from 'axios';


export const getSouvenirList = () => dispatch => {
  dispatch({ type: "GET_SOUVENIRS", status: 'processing' });
  axios.get("http://localhost:8081/http://localhost/planetary/souvenir")
    .then(response => {
      dispatch({ type: 'GET_SOUVENIRS', status: 'success', payload: response.data });
    }).catch(ex => {
      dispatch({ type: 'GET_SOUVENIRS', status: 'error' });
    })
}
export const buySouvenir = (souvenir_id, dateStr,  user_id) => dispatch => {
  dispatch({ type: "BUY_SOUVENIR", status: 'processing' });
  axios.post("http://localhost:8081/http://localhost/planetary/orders/create/souvenir/",
    {
      souvenir_id,
      isDelivered: false,
      dateStr,
      user_id
    },
    {
      headers: {
        "Authorization": localStorage["token"]
      }
    })
    .then(response => {
      dispatch({ type: 'BUY_SOUVENIR', status: 'success' });
    }).catch(ex => {
      dispatch({ type: 'BUY_SOUVENIR', status: 'error' });
    })
}


