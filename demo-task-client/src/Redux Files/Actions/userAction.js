import axios from 'axios';

export const startGetUserDetails = (token) => {
  const config = {
    headers: {
      Authorization: token,
    },
  };

  return (dispatch) =>
    axios
      .get('http://localhost:3097/users/account', config)
      .then((response) => {
        if (response.data.email) dispatch(setUserDetails(response.data));
      })
      .catch((err) => {
        console.log(err);
      });
};

const setUserDetails = (userData) => {
  return {
    type: 'SET_USER',
    payload: userData,
  };
};

export const setDefaultUser = () => {
  return {
    type: 'SET_DEFAULT',
  };
};
