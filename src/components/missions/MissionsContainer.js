import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table } from 'react-bootstrap';
import { getAllMissions } from '../../redux/missions/missionsSlice';
import MissionItem from './MissionItem';

function MissionsContainer() {
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!missions.length) {
      dispatch(getAllMissions());
    }
  }, []);
  return (
    <div>
      <Table striped bordered>
        <tHead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </tHead>
        <tBody>
          {missions.map((mission) => (
            <MissionItem key={mission.id} mission={mission} />
          ))}
        </tBody>
      </Table>
    </div>
  );
}

export default MissionsContainer;
