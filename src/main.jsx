import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { FavoritosProvider } from './context/FavoritosContext';
import { CarritoProvider } from './context/CarritoContext';
import { AuthProvider } from './context/AuthContext';
import App from './App';
import './styles/global.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <CarritoProvider> {/* El proveedor envuelve toda la app */}
        <FavoritosProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </FavoritosProvider>  
      </CarritoProvider>
    </AuthProvider>
  </React.StrictMode>
);
