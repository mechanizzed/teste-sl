import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  reducers: {
    signInSuccess: (state, action) => {
      state.user = action.payload;
    },
    signOutSuccess: (state, action) => {
      state.user = null;
    },
  },
});

export const { signInSuccess, signOutSuccess } = userSlice.actions;
export default userSlice.reducer;
