/* eslint-disable default-param-last */
const MISSIONS_ACTIONS = 'missionStore/missions/MISSION_ACTIONS';

const mURL = 'https://api.spacexdata.com/v3/missions';

const initialState = [];

export const missionAction = (payload) => ({
  type: MISSIONS_ACTIONS,
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
    };
    return obj;
  });
  dispatch(missionAction(makeMissions));
};

const missions = (state = initialState, action) => {
  switch (action.type) {
    case MISSIONS_ACTIONS:
      return action.payload;

    default:
      return state;
  }
};

export default missions;
