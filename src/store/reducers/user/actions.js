//http://localhost/planetary/shedule/?day_id=1

import axios from 'axios';


export const tryLogin = (login, password) => dispatch => {
  console.log("logpass->", login, ":", password);
  dispatch({ type: "AUTH", status: 'processing' });
  axios.post("http://localhost:8081/http://localhost/planetary/auth/",
    {
      login,
      password

    })
    .then(response => {
      console.log("token", response.data);
      dispatch({ type: 'AUTH', status: 'success', payload: response.data });
    }).catch(ex => {
      dispatch({ type: 'AUTH', status: 'error' });
    })
}

export const Unauthorize = () => dispatch => {
  dispatch({ type: "UNAUTHORIZE" });
}

export const getUser = () => dispatch => {
  console.log("local token->", localStorage["token"]);
  dispatch({ type: "GET_USER", status: 'processing' });
  axios.get("http://localhost:8081/http://localhost/planetary/user",
    {
      headers: {
        "Authorization": localStorage["token"]
      }

    })
    .then(response => {
      dispatch({ type: 'GET_USER', status: 'success', payload: response.data });
    }).catch(ex => {
      dispatch({ type: 'GET_USER', status: 'error' });
    })
}