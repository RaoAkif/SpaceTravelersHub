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
      id: e.id,
      name: e.name,
      description: e.description,
    };
    return obj;
  });
  dispatch(missionAction(makeMissions));
};

const missions = (action, state = initialState) => {
  switch (action.type) {
    case MISSIONS_ACTIONS:
      return [...action.payload];

    default:
      return state;
  }
};

export default missions;