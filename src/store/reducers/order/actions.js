//http://localhost/planetary/shedule/?day_id=1

import axios from 'axios';


export const getOrders = (user_id) => dispatch => {
  const orderList = [];
  dispatch({ type: "GET_ORDERS", status: 'processing' });
  axios.get("http://localhost:8081/http://localhost/planetary/orders/create/seat?user_id=" + user_id, {
    headers: {
      "Authorization": localStorage["token"]
    }
  })
    .then(response => {
      orderList.push(response.data);
      axios.get("http://localhost:8081/http://localhost/planetary/orders/create/souvenir?user_id=" + user_id, {
        headers: {
          "Authorization": localStorage["token"]
        }
      })
        .then(response => {
          orderList.push(response.data);
          dispatch({ type: 'GET_ORDERS', status: 'success', payload: orderList });
        }).catch(ex => {
          dispatch({ type: 'GET_ORDERS', status: 'error' });
        })
    }).catch(ex => {
      dispatch({ type: 'GET_ORDERS', status: 'error' });
    })
}

export const createShedule = (day_id, seat_count, seat_price, hour) => dispatch => {
  dispatch({ type: "BUY_SOUVENIR", status: 'processing' });
  axios.post("http://localhost:8081/http://localhost/planetary/shedule/",
    {
      day_id,
      seat_count,
      seat_price,
      hour
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


