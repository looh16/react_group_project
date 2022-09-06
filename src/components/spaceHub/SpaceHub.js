import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Missions from '../missions/Missions';

const SpaceHub = () => (
  <Router>
    <div>
      <Navigation />
      <Routes>
        <Route path="/missions" element={<Missions />} />
      </Routes>
    </div>
  </Router>
);

export default SpaceHub;
