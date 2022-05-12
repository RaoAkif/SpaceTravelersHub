import React from 'react';
import { useSelector } from 'react-redux';
import './style.css';

function MyProfile() {
  const rockets = useSelector((state) => state.rockets);
  const missions = useSelector((state) => state.missions);

  const reservedRockets = rockets.filter((rocket) => rocket.reserve);
  const activeMissions = missions.filter((mission) => mission.reserved);

  return (
    <div className="joined">
      <div className="missions">
        <h1>Active Missions</h1>
        <ul>
          {activeMissions.map((mission) => (
            <li key={mission.mission_id}>
              <h2>{mission.mission_name}</h2>
            </li>
          ))}
        </ul>
      </div>
      <div className="rockets">
        <h1>Reserved Rockets</h1>
        <ul>
          {reservedRockets.map((rocket) => (
            <li key={rocket.id}>
              <h2>{rocket.rocket_name}</h2>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MyProfile;
