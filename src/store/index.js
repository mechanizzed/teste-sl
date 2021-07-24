import { configureStore } from '@reduxjs/toolkit';
import user from './User/user.store';

const store = configureStore({
  reducer: {
    user,
  },
});

export default store;
