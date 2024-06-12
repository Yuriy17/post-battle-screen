import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  winningTeam: [],
  losingTeam: [],
  loading: false,
  error: null
};

const playersSlice = createSlice({
  name: 'players',
  initialState,
  reducers: {
    setPlayers(state, action) {
      state.winningTeam = action.payload.winningTeam;
      state.losingTeam = action.payload.losingTeam;
      state.loading = false;
      state.error = null;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
      state.loading = false;
    }
  }
});

export const { setPlayers, setLoading, setError } = playersSlice.actions;
// const initialState = {
//   players: { winningTeam: [], losingTeam: [] },
//   loading: false,
//   error: null
// };

// const playersSlice = createSlice({
//   name: 'players',
//   initialState,
//   reducers: {
//     fetchPlayersStart(state) {
//       state.loading = true;
//     },
//     fetchPlayersSuccess(state, action) {
//       state.players = action.payload;
//       state.loading = false;
//       state.error = null;
//     },
//     fetchPlayersFailure(state, action) {
//       state.loading = false;
//       state.error = action.payload;
//     },
//     updatePlayers(state, action) {
//       state.players = action.payload;
//     }
//   }
// });

// export const { fetchPlayersStart, fetchPlayersSuccess, fetchPlayersFailure, updatePlayers } = playersSlice.actions;
export default playersSlice.reducer;
