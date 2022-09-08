import React from 'react';
import { PropTypes } from 'prop-types';
import MissionStatus from './MissionStatus';
import MissionActive from './MissionActive';

const MissionItem = ({ propsMission }) => (
  <tr>
    <th>{propsMission.mission_name}</th>
    <td>{propsMission.description}</td>
    <td>
      <MissionActive mission={propsMission.reserved} />
    </td>
    <td>
      <MissionStatus
        reserved={propsMission.reserved}
        id={propsMission.mission_id}
      />
    </td>
  </tr>
);

MissionItem.propTypes = {
  propsMission: PropTypes.instanceOf(Object).isRequired,
};

export default MissionItem;
