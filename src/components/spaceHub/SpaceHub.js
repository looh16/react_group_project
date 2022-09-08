import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Missions from '../missions/MissionsContainer';
import Rockets from '../rocket/Rockets';
import Profile from '../profile/Profile';

const SpaceHub = () => (
  <Router>
    <div className="container">
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  </Router>
);

export default SpaceHub;
