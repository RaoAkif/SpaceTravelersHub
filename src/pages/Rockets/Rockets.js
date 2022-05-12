import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRockets } from '../../redux/rockets/rockets';
import Rocket from '../../components/Rocket/Rocket';

function Rockets() {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets);

  useEffect(() => {
    if (!rockets.length) dispatch(getRockets());
  }, []);

  return (
    <div className="rockets-list">
      {rockets.map((rocket) => (
        <Rocket
          key={rocket.id}
          id={rocket.id}
          image={rocket.flickr_images[0]}
          name={rocket.rocket_name}
          description={rocket.description}
          reserve={rocket.reserve}
        />
      ))}
    </div>
  );
}

export default Rockets;
