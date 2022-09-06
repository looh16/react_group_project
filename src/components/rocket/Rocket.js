import PropTypes from 'prop-types';

const Rocket = ({ rocket }) => (
  <div>
    <div>
      <img src={rocket.flickr_images[0]} alt={rocket.name} />
    </div>
    <div>
      <h1>{rocket.name}</h1>
      <p>
        {rocket.description}
      </p>
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
