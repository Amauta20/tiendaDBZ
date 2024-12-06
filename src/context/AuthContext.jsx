import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setIsAuthenticated(true);
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (username, password) => {
    const predefinedUsers = [
      { username: 'usuario1', password: 'usuario123' },
      { username: 'usuario2', password: 'usuario123' },
      { username: 'usuario3', password: 'usuario123' },
    ];

    const user = predefinedUsers.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      localStorage.setItem('user', JSON.stringify({ username: user.username }));
      setIsAuthenticated(true);
      setUser({ username: user.username });
      return true;
    }

    return false;
  };

  const logout = () => {
    localStorage.removeItem('user');
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
