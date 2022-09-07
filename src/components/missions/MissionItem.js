/* eslint-disable react/prop-types */
import React from 'react';
import MissionStatus from './MissionStatus';

const MissionItem = ({ mission }) => (
  <tr>
    <td>{mission.mission_name}</td>
    <td>{mission.description}</td>
    <td>
      <button type="button">Not A Member</button>
    </td>
    <td>
      <MissionStatus reserved={mission.reserved} id={mission.mission_id} />
    </td>
  </tr>
);

export default MissionItem;
