import React, {createContext, useContext, useState, useEffect} from 'react';
import {getData, removeData, storeData} from '../utils/async-storage';

const AppContext = createContext();

export const AppProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const storedUser = await getData('user');
        if (storedUser) {
          setUser(storedUser);
        }
      } catch (error) {
        console.error('Error loading user from storage:', error);
      } finally {
        setLoading(false);
      }
    };
    loadUser();
  }, []);

  const login = async userData => {
    try {
      setUser(userData);
      await storeData('user', userData);
    } catch (error) {
      console.error('Error saving user to storage:', error);
    }
  };

  const logout = async () => {
    try {
      setUser(null);
      await removeData('user');
    } catch (error) {
      console.error('Error removing user from storage:', error);
    }
  };

  return (
    <AppContext.Provider value={{user, setUser, login, logout, loading}}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
