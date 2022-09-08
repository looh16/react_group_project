import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { bookingRocket, bookingCancel } from '../../redux/rockets/rocketsSlice';

const RocketsBookingButton = (props) => {
  const { id, reserved } = props;
  const dispatch = useDispatch();

  return (
    <>
      {!reserved && (
      <button
        id={id}
        type="button"
        className="btn btn-primary"
        onClick={() => dispatch(bookingCancel(id))}
      >
        <span>Reserve Rocket</span>
      </button>
      )}
      {reserved && (
        <button
          id={id}
          type="button"
          className="btn btn-light"
          onClick={() => dispatch(bookingRocket(id))}
        >
          <span>Cancel Reserve</span>
        </button>
      )}
    </>
  );
};

RocketsBookingButton.propTypes = {
  id: PropTypes.number,
  reserved: PropTypes.bool,
}.isRequired;

export default RocketsBookingButton;
