import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllRockets } from '../../redux/rockets/rocketsSlice';
import Rocket from './Rocket';

const Rockets = () => {
  // get rockets data from the store
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!rockets.length) {
      dispatch(getAllRockets());
    }
  }, []);

  return (
    <div>
      {
        rockets.map((rocket) => (
          <Rocket
            key={rocket.id}
            rocket={rocket}
          />
        ))
      }
    </div>
  );
};
export default Rockets;
