// import { legacy_createStore as createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import { usersReducer } from './reducers/usersReducer';
import animalsSlice from './reducers/animalsSlice';
import authSlice from './reducers/authSlice';
// import rootReducer from './reducers/rootReducer';

const store = configureStore({
  reducer: {
    animals: animalsSlice,
    users: usersReducer,
    auth: authSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof store.getState>;
export default store;
