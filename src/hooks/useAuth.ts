import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkToken = async () => {
      try {
        const token = await AsyncStorage.getItem('userToken');
        console.log('Token retrieved:', token);
        setIsLoggedIn(!!token);
      } catch (error) {
        console.error('Failed to retrieve token:', error);
      }
    };
    checkToken();
  }, []);

  const login = async () => {
    try {
      await AsyncStorage.setItem('userToken', '12345678');
      console.log('Token set');
      setIsLoggedIn(true);
    } catch (error) {
      console.error('Failed to set token:', error);
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.removeItem('userToken');
      console.log('Token removed');
      setIsLoggedIn(false);
    } catch (error) {
      console.error('Failed to remove token:', error);
    }
  };

  return { isLoggedIn, login, logout };
};
