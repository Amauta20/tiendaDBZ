import React, { createContext, useState } from 'react';

export const FavoritosContext = createContext();

export const FavoritosProvider = ({ children }) => {
  const [favoritos, setFavoritos] = useState(() => {
    const favoritosGuardados = localStorage.getItem('favoritos');
    return favoritosGuardados ? JSON.parse(favoritosGuardados) : [];
  });

  const agregarFavorito = (personaje) => {
    setFavoritos((prev) => {
      const nuevosFavoritos = [...prev, personaje];
      localStorage.setItem('favoritos', JSON.stringify(nuevosFavoritos));
      return nuevosFavoritos;
    });
  };

  const eliminarFavorito = (id) => {
    setFavoritos((prev) => {
      const actualizados = prev.filter((favorito) => favorito.id !== id);
      localStorage.setItem('favoritos', JSON.stringify(actualizados));
      return actualizados;
    });
  };

  return (
    <FavoritosContext.Provider
      value={{ favoritos, agregarFavorito, eliminarFavorito }}
    >
      {children}
    </FavoritosContext.Provider>
  );
};
