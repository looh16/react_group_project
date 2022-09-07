import { PropTypes } from 'prop-types';
import { Button } from 'react-bootstrap';

function MissionActive(props) {
  const { mission } = props;

  const activeStatus = () => (mission ? 'Active Member' : 'NOT A MEMBER');

  return (
    <Button type="button" variant="success">
      {activeStatus()}
    </Button>
  );
}

MissionActive.propTypes = {
  mission: PropTypes.bool.isRequired,
};

export default MissionActive;
