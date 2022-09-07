import React from 'react';
import { Table } from 'react-bootstrap';
import MissionsProfile from '../missions/MissionsProfile';
import RocketsProfile from '../rocket/RocketsProfile';

function Profile() {
  return (
    <div className="container d-flex">
      <Table bordered striped>
        <tHead>
          <tr>
            <th>My Rockets</th>
          </tr>
        </tHead>

        <RocketsProfile />
      </Table>

      <Table bordered striped>
        <tHead>
          <tr>
            <th>My Missions</th>
          </tr>
        </tHead>

        <MissionsProfile />
      </Table>
    </div>
  );
}
export default Profile;
