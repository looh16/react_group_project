import { createAsyncThunk } from '@reduxjs/toolkit';
import missionsService from '../../services/missionService';

// Action
const FETCH_MISSIONS = 'SPACE_TRAVELERS_HUB/rockets/FETCH_MISSIONS';

// Action creator
export const getAllMissions = createAsyncThunk(FETCH_MISSIONS, async () => {
  const response = await missionsService.fetchMissions();
  const responseResult = response.data;
  const result = responseResult.map((obj) => ({ ...obj }));
  return { missions: result };
});

// Initialize state
const missions = [];
// Reducer
const reducer = (state = missions, action) => {
  const { type, payload } = action;
  switch (type) {
    case `${FETCH_MISSIONS}/fulfilled`:
      return payload.missions;
    default:
      return state;
  }
};

export default reducer;
