import { configureStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import rocketsReducer from './rockets/rockets';
import missionsReducer from './missions/missions';

const rootReducer = combineReducers({
  rockets: rocketsReducer,
  missions: missionsReducer,
});

const thunkMiddleware = applyMiddleware(thunk, logger);

const store = configureStore({ reducer: rootReducer, thunkMiddleware });

export default store;
