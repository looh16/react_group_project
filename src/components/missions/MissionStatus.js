import React from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../../redux/missions/missionsSlice';

function MissionStatus(props) {
  const { reserved, id } = props;
  const dispatch = useDispatch();

  const handleJoin = () => {
    if (!reserved) {
      dispatch(joinMission(id));
    } else {
      dispatch(leaveMission(id));
    }
  };

  const reservedStatus = () => (!reserved ? 'Join ' : 'Leave ');

  return (
    <button type="button" onClick={handleJoin}>
      {reservedStatus()}
      Mission
    </button>
  );
}

MissionStatus.propTypes = {
  reserved: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
};

export default MissionStatus;
