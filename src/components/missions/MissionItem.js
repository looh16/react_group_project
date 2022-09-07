import React from 'react';
import { PropTypes } from 'prop-types';
import MissionStatus from './MissionStatus';
import MissionActive from './MissionActive';

const MissionItem = ({ mission }) => (
  <tr>
    <td>{mission.mission_name}</td>
    <td>{mission.description}</td>
    <td>
      <MissionActive mission={mission.reserved} />
    </td>
    <td>
      <MissionStatus reserved={mission.reserved} id={mission.mission_id} />
    </td>
  </tr>
);

MissionItem.propTypes = {
  mission: PropTypes.bool.isRequired,
};

export default MissionItem;
