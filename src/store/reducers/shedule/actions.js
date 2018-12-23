//http://localhost/planetary/shedule/?day_id=1

import axios from 'axios';


export const getShedule = (day_id) => dispatch => {
  dispatch({ type: "GET_SHEDULE", status: 'processing' });
  axios.get("http://localhost:8081/http://localhost/planetary/shedule/?day_id=" + day_id)
    .then(response => {
      dispatch({ type: 'GET_SHEDULE', status: 'success', payload: response.data });
    }).catch(ex => {
      dispatch({ type: 'GET_SHEDULE', status: 'error' });
    })
}
export const buySeat = (booking, shedule_id, user_id) => dispatch => {
  dispatch({ type: "BUY_SEAT", status: 'processing' });
  axios.post("http://localhost:8081/http://localhost/planetary/orders/create/seat/",
    {
      booking,
      shedule_id,
      user_id
    },
    {
      headers: {
        "Authorization": localStorage["token"]
      }
    })
    .then(response => {
      dispatch({ type: 'BUY_SEAT', status: 'success' });
    }).catch(ex => {
      dispatch({ type: 'BUY_SEAT', status: 'error' });
    })
}
export const selectTimeItem = (timeItem) => {
  return { type: 'SELECT_ITEM', payload: timeItem };
}

