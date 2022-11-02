import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import errorsReducer from '../Reducers/errorsReducer';
import registerReducer from '../Reducers/registerReducer';
import tokenReducer from '../Reducers/tokenReducer';
import userReducer from '../Reducers/userReducer';

const configureStore = () => {
  const store = createStore(
    combineReducers({
      errors: errorsReducer,
      register: registerReducer,
      token: tokenReducer,
      user: userReducer,
    }),
    applyMiddleware(thunk)
  );
  return store;
};

export default configureStore;
