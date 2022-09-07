import { useSelector } from 'react-redux';

const MissionsProfile = () => {
  const storedMissions = useSelector((state) => state.missions);
  const reservedMissions = storedMissions.filter((mission) => mission.reserved);
  const displayedMissions = reservedMissions.map((mission) => (
    <li key={mission.mission_id}>{mission.mission_name}</li>
  ));
  return <div>{displayedMissions}</div>;
};

export default MissionsProfile;
