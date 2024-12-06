import React from 'react';
import { AuthProvider } from './context/AuthContext';
import Header from './components/Header';
import RutasApp from './routes/RutasApp';
import './styles/global.css';

const App = () => {
  return (
    <AuthProvider>
      <Header />
      <RutasApp />
    </AuthProvider>
  );
};

export default App;
