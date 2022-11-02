import axios from 'axios';
import { setLoginError } from './errorsAction';
import { startGetUserDetails } from './userAction';

export const startLoginUser = (body) => {
  return (dispatch) => {
    axios
      .post('http://localhost:3097/users/login', body)
      .then((response) => {
        const { token } = response.data;
        dispatch(setToken(token));
        dispatch(startGetUserDetails(token));
        localStorage.setItem('token', token);
      })
      .catch((err) => {
        dispatch(setLoginError(err.response.data.message));
      });
  };
};

export const setToken = (token) => {
  return {
    type: 'SET_USER_TOKEN',
    payload: token,
  };
};
