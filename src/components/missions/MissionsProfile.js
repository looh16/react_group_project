import { useSelector } from 'react-redux';

const MissionsProfile = () => {
  const storedMissions = useSelector((state) => state.missions);
  const reservedMissions = storedMissions.filter((mission) => mission.reserved);
  const displayedMissions = reservedMissions.map((mission) => (
    <tr key={mission.mission_id}>
      {' '}
      <td key={mission.mission_id}>{mission.mission_name}</td>
    </tr>
  ));
  return <tBody>{displayedMissions}</tBody>;
};

export default MissionsProfile;
