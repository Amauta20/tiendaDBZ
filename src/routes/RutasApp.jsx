import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Inicio from '../pages/Inicio';
import Contacto from '../pages/Contacto';
import Login from '../pages/Login';
import Catalogo from '../pages/Catalogo';
import Carrito from '../pages/Carrito';
import Favoritos from '../pages/Favoritos';
import Checkout from '../pages/Checkout';
import DetalleProducto from '../pages/DetalleProducto';
import PrivateRoute from './PrivateRoute';

const RutasApp = () => {
  return (
    <Routes>
      {/* Páginas públicas */}
      <Route path="/" element={<Inicio />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/login" element={<Login />} />

      {/* Páginas protegidas */}
      <Route
        path="/catalogo"
        element={
          <PrivateRoute>
            <Catalogo />
          </PrivateRoute>
        }
      />
      <Route
        path="/carrito"
        element={
          <PrivateRoute>
            <Carrito />
          </PrivateRoute>
        }
      />
      <Route
        path="/favoritos"
        element={
          <PrivateRoute>
            <Favoritos />
          </PrivateRoute>
        }
      />
      <Route
        path="/checkout"
        element={
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        }
      />
      <Route
        path="/favoritos"
        element={
          <PrivateRoute>
            <Favoritos />
          </PrivateRoute>
       }
      />
      
      {/* Ruta dinámica para el detalle del personaje */}
      <Route
        path="/character/:id"
        element={
          <PrivateRoute>
            <DetalleProducto />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default RutasApp;
