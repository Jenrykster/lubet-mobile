import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
  token: string;
  name: string;
  email: string;
}

const initialState: UserState = {
  token: '',
  name: '',
  email: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUserAction: (
      state,
      action: PayloadAction<{ token: string; name: string; email: string }>
    ) => {
      state.token = action.payload.token;
      state.email = action.payload.email;
      state.name = action.payload.name;
    },
  },
});

// Action creators are generated for each case reducer function
export const { loginUserAction } = userSlice.actions;

export default userSlice.reducer;
