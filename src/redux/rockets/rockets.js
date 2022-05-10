import fetchRockets from './rocketsApi';

const GET_ROCKETS = 'spaceTravelHub/rockets/GET_ROCKETS';

const initialState = [];

export default function rocketsReducer(state = initialState, action = {}) {
  switch (action.type) {
    case GET_ROCKETS:
      return action.payload;
    default:
      return state;
  }
}

export const getRockets = () => async (dispatch) => {
  const rockets = await fetchRockets();
  dispatch({ type: GET_ROCKETS, payload: rockets });
};
