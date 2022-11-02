import axios from 'axios';
import { setRegistrationError } from './errorsAction';

export const startRegisterUser = (body) => {
  return (dispatch) =>
    axios
      .post('http://localhost:3097/users/register', body)
      .then((response) => {
        if (response.data._id) {
          dispatch(setRegistrationStatus(true));
          dispatch(setRegistrationError(''));
        }
      })
      .catch((err) => {
        dispatch(setRegistrationError(err.response.data.message));
        dispatch(setRegistrationStatus(false));
      });
};

export const setRegistrationStatus = (value = false) => {
  return {
    type: 'SET_IS_REGISTERED',
    payload: value,
  };
};
