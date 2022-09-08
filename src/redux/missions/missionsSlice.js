import { createAsyncThunk } from '@reduxjs/toolkit';
import missionsService from '../../services/missionService';

// Action
const FETCH_MISSIONS = 'space_travelers_hub/rockets/FETCH_MISSIONS';
const JOIN_MISSION = 'space_travelers_hub/rockets/JOIN_MISSION';
const LEAVE_MISSION = 'space_travelers_hub/rockets/LEAVE_MISSION';

// Action creator
export const getAllMissions = createAsyncThunk(FETCH_MISSIONS, async () => {
  const response = await missionsService.fetchMissions();
  const responseResult = response.data;
  const result = responseResult.map((obj) => ({ ...obj, reserved: false }));
  return { missions: result };
});

export const joinMission = (id) => ({ type: JOIN_MISSION, payload: id });

export const leaveMission = (id) => ({ type: LEAVE_MISSION, payload: id });

const reservedMissions = (state, id, reserved) => {
  const newReserved = state.map((mission) => {
    if (mission.mission_id !== id) {
      return mission;
    }
    return { ...mission, reserved };
  });
  return newReserved;
};

// Initialize state
const missions = [];
// Reducer
const reducer = (state = missions, action) => {
  const { type, payload } = action;
  switch (type) {
    case `${FETCH_MISSIONS}/fulfilled`:
      return payload.missions;
    case JOIN_MISSION:
      return reservedMissions(state, action.payload, true);
    case LEAVE_MISSION:
      return reservedMissions(state, action.payload, false);
    default:
      return state;
  }
};

export default reducer;
