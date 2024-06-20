'use client'
import { useState } from 'react';

export default function useAuthToken() {
  const [token, setToken] = useState(null);

  const saveToken = (newToken) => {
    localStorage.setItem('jwt', newToken);
    setToken(newToken);
    localStorage.setItem('loggedIn', 'true');
  };

  const getToken = () => {
    const storedToken = localStorage.getItem('jwt');
    return storedToken;
  };

  const removeToken = () => {
    localStorage.removeItem('jwt');
    localStorage.removeItem('loggedIn');
    setToken(null);
  };

  return {
    token,
    saveToken,
    getToken,
    removeToken,
  };
};


