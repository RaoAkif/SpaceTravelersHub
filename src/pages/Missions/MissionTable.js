import { useSelector } from 'react-redux';
import MissionList from './MissionList';

function Table() {
  const mission = useSelector((state) => state.missions);

  return (
    <div className="container table-responsive">
      <table className="table-bordered table-striped table">
        <thead>
          <tr className="fs-5">
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {
            mission.map((msn) => (
              <MissionList
                key={msn.mission_id}
                id={msn.mission_id}
                name={msn.mission_name}
                description={mission.description}
              />
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default Table;
