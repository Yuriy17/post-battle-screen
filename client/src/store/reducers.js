// redux/reducers.js
import {
  FETCH_POST_BATTLE_DATA_REQUEST,
  FETCH_POST_BATTLE_DATA_SUCCESS,
  FETCH_POST_BATTLE_DATA_FAILURE,
} from './actions';

const initialState = {
  postBattleData: null,
  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POST_BATTLE_DATA_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_POST_BATTLE_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        postBattleData: action.payload,
        error: null, // Reset error on successful fetch
      };
    case FETCH_POST_BATTLE_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
