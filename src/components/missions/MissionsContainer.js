import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table } from 'react-bootstrap';
import { getAllMissions } from '../../redux/missions/missionsSlice';
import MissionItem from './MissionItem';

const MissionsContainer = () => {
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!missions.length) {
      dispatch(getAllMissions());
    }
  }, []);
  return (
    <div className="container-fluid d-flex shadow-lg p-3 rounded table-div">
      <Table striped bordered responsive="sm">
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <MissionItem key={mission.mission_id} propsMission={mission} />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default MissionsContainer;
