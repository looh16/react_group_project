import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Rockets from '../rocket/Rockets';

const SpaceHub = () => (
  <Router>
    <div>
      <Navigation />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Rockets />
                    }
        />
      </Routes>
    </div>
  </Router>
);

export default SpaceHub;
