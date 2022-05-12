import fetchRockets from './rocketsApi';

const GET_ROCKETS = 'spaceTravelHub/rockets/GET_ROCKETS';
const RESERVE_ROCKET = 'spaceTravelHub/rockets/RESERVE_ROCKET';
const UNRESERVE_ROCKET = 'spaceTravelHub/rockets/UNRESERVE_ROCKET';

const initialState = [];

export default function rocketsReducer(state = initialState, action = {}) {
  switch (action.type) {
    case GET_ROCKETS:
      return action.payload.map((rocket) => ({
        ...rocket,
        reserve: false,
      }));
    case RESERVE_ROCKET:
      return state.map((rocket) => {
        if (rocket.id === action.payload.id) {
          return { ...rocket, reserve: true };
        }
        return rocket;
      });
    case UNRESERVE_ROCKET:
      return state.map((rocket) => {
        if (rocket.id === action.payload.id) {
          return { ...rocket, reserve: false };
        }
        return rocket;
      });
    default:
      return state;
  }
}

export const getRockets = () => async (dispatch) => {
  const rockets = await fetchRockets();
  dispatch({ type: GET_ROCKETS, payload: rockets });
};

export const reserveRocket = (id) => ({
  type: RESERVE_ROCKET,
  payload: { id },
});

export const unReserveRocket = (id) => ({
  type: UNRESERVE_ROCKET,
  payload: { id },
});
