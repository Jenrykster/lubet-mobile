import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
  token: string;
}

const initialState: UserState = {
  token: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUserAction: (state, action: PayloadAction<{ token: string }>) => {
      state.token = action.payload.token;
    },
  },
});

// Action creators are generated for each case reducer function
export const { loginUserAction } = userSlice.actions;

export default userSlice.reducer;
