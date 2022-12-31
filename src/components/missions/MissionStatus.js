import React from 'react';
import { PropTypes } from 'prop-types';
import { Button } from 'react-bootstrap';
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

  const reservedStatus = () => (reserved ? 'Leave ' : 'Join ');

  return (
    <Button
      type="button"
      onClick={handleJoin}
      variant="outline-secondary"
      size="small"
      active
    >
      <span className="btn-text">
        {reservedStatus()}
        Mission
      </span>
    </Button>
  );
}

MissionStatus.propTypes = {
  reserved: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
};

export default MissionStatus;
