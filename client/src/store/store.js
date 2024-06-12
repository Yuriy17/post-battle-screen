import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducers';


const store = configureStore({
  reducer: {
    players: reducer.reducer
  }
});

export default store;
