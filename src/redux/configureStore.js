import { configureStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import missions, { missionsAPI } from './missions/missions';

const rootReducer = combineReducers({
  // books: bookReducer,
  missions,
});

const thunkMiddleware = applyMiddleware(thunk);

const store = configureStore({ reducer: rootReducer, thunkMiddleware });

store.dispatch(missionsAPI());

export default store;
