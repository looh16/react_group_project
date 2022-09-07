import React from 'react';
import { Table } from 'react-bootstrap';
import MissionsProfile from '../missions/MissionsProfile';

function Profile() {
  return (
    <Table bordered striped>
      <tHead>
        <tr>
          <th>My Missions</th>
          <th>My Rockets</th>
        </tr>
      </tHead>

      <MissionsProfile />
    </Table>
  );
}

export default Profile;
