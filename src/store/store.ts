import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import gamesReducer from './slices/gamesSlice';

export const store = configureStore({
  reducer: {
    games: gamesReducer,
    user: userReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
