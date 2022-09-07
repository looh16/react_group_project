/* eslint-disable react/prop-types */
import React from 'react';

const MissionItem = ({ mission }) => (
  <tr>
    <th>{mission.mission_name}</th>
    <td>{mission.description}</td>
    <td>
      <button type="button">Not A Member</button>
    </td>
    <td>
      <button type="button">Join Mission</button>
    </td>
  </tr>
);

export default MissionItem;
