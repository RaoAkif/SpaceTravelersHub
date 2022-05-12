/* eslint-disable default-param-last */
const MISSIONS_ACTIONS = 'missionStore/missions/MISSION_ACTIONS';
const JOIN_MISSION = 'missionStore/missions/JOIN_MISSION';
const LEAVE_MISSION = 'missionStore/missions/LEAVE_MISSION';

const mURL = 'https://api.spacexdata.com/v3/missions';

const initialState = [];

export const missionAction = (payload) => ({
  type: MISSIONS_ACTIONS,
  payload,
});

export const joinMission = (payload) => ({
  type: JOIN_MISSION,
  payload,
});

export const leaveMission = (payload) => ({
  type: LEAVE_MISSION,
  payload,
});

export const missionsAPI = () => async (dispatch) => {
  const response = await fetch(mURL);
  const missions = await response.json();
  const makeMissions = missions.map((e) => {
    const obj = {
      mission_id: e.mission_id,
      mission_name: e.mission_name,
      description: e.description,
      reserved: false,
    };
    return obj;
  });
  dispatch(missionAction(makeMissions));
};

const missions = (state = initialState, action = {}) => {
  switch (action.type) {
    case MISSIONS_ACTIONS:
      return action.payload;

    case JOIN_MISSION:
      return state.map((mission) => {
        if (mission.mission_id !== action.payload) return mission;
        return { ...mission, reserved: true };
      });

    case LEAVE_MISSION:
      return state.map((mission) => {
        if (mission.mission_id !== action.payload) return mission;
        return { ...mission, reserved: false };
      });

    default:
      return state;
  }
};

export default missions;
