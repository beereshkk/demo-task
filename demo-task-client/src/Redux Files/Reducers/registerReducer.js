const registeredInitialState = false;

const registerReducer = (state = registeredInitialState, action) => {
  switch (action.type) {
    case 'SET_IS_REGISTERED': {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default registerReducer;
