import React, {createContext, useContext, useState} from 'react';

const AppContext = createContext();

export const AppProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState('light');

  const login = userData => setUser(userData);
  const logout = () => setUser(null);

  return (
    <AppContext.Provider
      value={{user, setUser, login, logout, theme, setTheme}}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
