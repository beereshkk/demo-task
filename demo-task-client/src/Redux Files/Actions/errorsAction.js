export const setLoginError = (message) => {
  return {
    type: 'SET_LOGIN_ERROR',
    payload: message,
  };
};

export const setRegistrationError = (message) => {
  return {
    type: 'SET_REGISTRATION_ERROR',
    payload: message,
  };
};

export const clearErrors = () => {
  return {
    type: 'CLEAR_ERRORS',
  };
};
