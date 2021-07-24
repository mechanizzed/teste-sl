// import { configureStore } from '@reduxjs/toolkit';
// import { combineReducers } from 'redux';

// import user from './User';

// const reducer = combineReducers({
//   user,
// });

// const store = configureStore({
//   reducer,
// });
// export default store;

import { configureStore } from '@reduxjs/toolkit';

import user from './User/user.store';

const store = configureStore({
  reducer: {
    user,
  },
});

export default store;
