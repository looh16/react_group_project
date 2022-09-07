import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rocketReducer from './rockets/rocketsSlice';
import missionReducer from './missions/missionsSlice';

const rootReducer = combineReducers({
  rockets: rocketReducer,
  missions: missionReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk, logger],
});

export default store;
