const errorsInitialState = {
  login: '',
  registration: '',
};

const errorsReducer = (state = errorsInitialState, action) => {
  switch (action.type) {
    case 'SET_LOGIN_ERROR': {
      return { ...state, login: action.payload };
    }
    case 'SET_REGISTRATION_ERROR': {
      return { ...state, registration: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default errorsReducer;
