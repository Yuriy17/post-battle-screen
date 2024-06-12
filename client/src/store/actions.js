import socket from "../socket";

// redux/actions.js
export const FETCH_POST_BATTLE_DATA_REQUEST = 'FETCH_POST_BATTLE_DATA_REQUEST';
export const FETCH_POST_BATTLE_DATA_SUCCESS = 'FETCH_POST_BATTLE_DATA_SUCCESS';
export const FETCH_POST_BATTLE_DATA_FAILURE = 'FETCH_POST_BATTLE_DATA_FAILURE';

export const fetchPostBattleDataRequest = () => ({
  type: FETCH_POST_BATTLE_DATA_REQUEST
});

export const fetchPostBattleDataSuccess = (data) => ({
  type: FETCH_POST_BATTLE_DATA_SUCCESS,
  payload: data
});

export const fetchPostBattleDataFailure = (error) => ({
  type: FETCH_POST_BATTLE_DATA_FAILURE,
  payload: error
});

export const fetchPostBattleData = () => {
  return async (dispatch) => {
    dispatch(fetchPostBattleDataRequest());
    try {
      const response = await fetch('/api/post-battle-data');
      if (!response.ok) {
        throw new Error('Failed to fetch post-battle data');
      }
      const data = await response.json();
      dispatch(fetchPostBattleDataSuccess(data));
    } catch (error) {
      dispatch(fetchPostBattleDataFailure(error.message));
    }
  };
};

export const subscribeToUpdates = (dispatch) => {
  socket.on('postBattleDataUpdate', (data) => {
    dispatch(fetchPostBattleData.fulfilled(data));
  });
};

export const sendFriendRequest = (playerId) => {
  socket.emit('sendFriendRequest', playerId);
};
