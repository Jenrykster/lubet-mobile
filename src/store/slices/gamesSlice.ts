import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Game } from '../../shared/types';

export interface GamesState {
  gameList: Game[];
}

const initialState: GamesState = {
  gameList: [],
};

export const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    setGamesAction: (state, action: PayloadAction<{ games: Game[] }>) => {
      state.gameList = action.payload.games;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setGamesAction } = gamesSlice.actions;

export default gamesSlice.reducer;
