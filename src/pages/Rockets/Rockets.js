import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRockets } from '../../redux/rockets/rockets';
import Rocket from '../../components/Rocket/Rocket';

function Rockets() {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets);

  useEffect(() => {
    dispatch(getRockets());
  }, []);

  return (
    <div className="rockets-list">
      {rockets.map((rocket) => (
        <Rocket
          key={rocket.id}
          id={rocket.id}
          image={rocket.flickr_images}
          name={rocket.rocket_name}
          desc={rocket.description}
        />
      ))}
    </div>
  );
}
