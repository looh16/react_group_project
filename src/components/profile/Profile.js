import React from 'react';
import { Table } from 'react-bootstrap';
import MissionsProfile from '../missions/MissionsProfile';
import RocketsProfile from '../rocket/RocketsProfile';

function Profile() {
  return (
    <div className="container d-flex justify-content-between">
      <Table bordered striped>
        <thead>
          <tr>
            <th>My Rockets</th>
          </tr>
        </thead>

        <RocketsProfile />
      </Table>

      <Table bordered striped>
        <thead>
          <tr>
            <th>My Missions</th>
          </tr>
        </thead>

        <MissionsProfile />
      </Table>
    </div>
  );
}
export default Profile;
