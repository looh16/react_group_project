import React from 'react';
import MissionsProfile from '../missions/MissionsProfile';

function Profile() {
  return (
    <div>
      <div>
        <h3>Reserved Missions</h3>
        <ul>
          {' '}
          <MissionsProfile />
        </ul>
      </div>
      <div>
        <h3>Reserved Rockets</h3>
      </div>
    </div>
  );
}

export default Profile;
