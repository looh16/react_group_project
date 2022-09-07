import { createAsyncThunk } from '@reduxjs/toolkit';
import Service from '../../services/Service';

const rockets = [];
const GET_ALL_ROCKETS = 'rockets/GET_ALL_ROCKETS';

export const getAllRockets = createAsyncThunk(GET_ALL_ROCKETS, async () => {
  const response = await Service.fetchRockets();
  const responseResult = response.data;
  const result = responseResult.map((obj) => ({ ...obj, reserved: false }));
  return { rockets: result };
});

const reducer = (state = rockets, action) => {
  const { type, payload } = action;
  switch (type) {
    case `${GET_ALL_ROCKETS}/fulfilled`:
      return payload.rockets;
    default:
      return state;
  }
};

export default reducer;
