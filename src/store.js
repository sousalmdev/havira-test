import {create} from 'zustand';

const useStore = create(set => ({
  users: [],
  addUser: (user) => set(state => ({ users: [...state.users, { id: state.users.length + 1, ...user }] })),
  setUsers: (users) => set(() => ({ users })),
}));

export default useStore;
