import { configureStore, createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'users',
  initialState: [],
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    setUsers: (state, action) => {
      state.splice(0, state.length, ...action.payload);
    },
  },
});

export const { addUser, setUsers } = userSlice.actions;

const store = configureStore({
  reducer: {
    users: userSlice.reducer,
  },
});

export default store;
