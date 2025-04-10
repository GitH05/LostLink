import { createContext } from 'react';

import { useProvideAuth } from '../hooks';

const initialState = {
  user: null,
  setUser:null,
  register: () => {},
  login: () => {},
  logout: () => {},
  updateUser: () => {},
  loading: true,
};

export const UserContext = createContext(initialState);

export const UserProvider = ({ children }) => {
  const auth = useProvideAuth();

  return <UserContext.Provider value={auth}>{children}</UserContext.Provider>;
};
