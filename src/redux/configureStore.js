import { configureStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import rocketsReducer from './rockets/rockets';
import missions, { missionsAPI } from './missions/missions';

const rootReducer = combineReducers({
  rockets: rocketsReducer,
  missions,
});

const thunkMiddleware = applyMiddleware(thunk, logger);

const store = configureStore({ reducer: rootReducer, thunkMiddleware });

store.dispatch(missionsAPI());

export default store;
