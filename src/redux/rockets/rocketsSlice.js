import { createAsyncThunk } from '@reduxjs/toolkit';
import Service from '../../services/Service';

const rockets = [];
const GET_ALL_ROCKETS = 'rockets/GET_ALL_ROCKETS';
const BOOKING_ROCKETS = 'rockets/BOOKING_ROCKETS';
const BOOKING_CANCEL = 'rockets/BOOKING_CANCEL';

export const getAllRockets = createAsyncThunk(GET_ALL_ROCKETS, async () => {
  const response = await Service.fetchRockets();
  const responseResult = response.data;
  const result = responseResult.map((obj) => ({ ...obj, reserved: false }));
  return { rockets: result };
});

export const bookingRocket = (payload) => (
  {
    type: BOOKING_ROCKETS,
    payload,
  }
);

export const bookingCancel = (payload) => (
  {
    type: BOOKING_CANCEL,
    payload,
  }
);

const reducer = (state = rockets, action) => {
  const { type, payload } = action;
  switch (type) {
    case `${GET_ALL_ROCKETS}/fulfilled`:
      return payload.rockets;
    case BOOKING_ROCKETS:
      return state.map((rocket) => {
        if (rocket.id !== parseInt(action.payload, 10)) {
          return rocket;
        }
        return { ...rocket, reserved: !rocket.reserved };
      });
    case BOOKING_CANCEL:
      return state.map((rocket) => {
        if (rocket.id !== parseInt(action.payload, 10)) {
          return rocket;
        }
        return { ...rocket, reserved: !rocket.reserved };
      });
    default:
      return state;
  }
};

export default reducer;
