import PropTypes from 'prop-types';
import Badge from 'react-bootstrap/Badge';
import RocketsBookingButton from './RocketsBookingButton';
import './Rocket.css';

const Rocket = ({ rocket }) => (
  <div className="container d-flex">
    <div>
      <img className="rocketImages" src={rocket.flickr_images[0]} alt={rocket.name} />
    </div>
    <div className="container">
      <h3>{rocket.rocket_name}</h3>
      <p>
        {!rocket.reserved && (
        <p>{rocket.description}</p>
        )}
        {rocket.reserved && (
          <p>
            {' '}
            <Badge pill bg="info">Reserved</Badge>
            {' '}
            {rocket.description}
          </p>
        )}
      </p>
      <RocketsBookingButton id={rocket.id} reserved={rocket.reserved} />
    </div>
  </div>
);

Rocket.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  reserved: PropTypes.bool,
}.isRequired;

export default Rocket;
