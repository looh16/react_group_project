import { useSelector } from 'react-redux';

const RocketsProfile = () => {
  const storedRockets = useSelector((state) => state.rockets);
  const reservedRockets = storedRockets.filter((rocket) => rocket.reserved === true);
  const displayedRockets = reservedRockets.map((rocket) => (
    <tr key={rocket.id}>
      {' '}
      <td key={rocket.id}>{rocket.rocket_name}</td>
    </tr>
  ));
  return <tBody>{displayedRockets}</tBody>;
};

export default RocketsProfile;
