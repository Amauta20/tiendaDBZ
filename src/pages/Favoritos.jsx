import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FavoritosContext } from '../context/FavoritosContext';
import '../styles/favoritos.css';

const Favoritos = () => {
  const { favoritos, eliminarFavorito } = useContext(FavoritosContext);

  if (favoritos.length === 0) {
    return <p className="favoritos-vacio">No tienes personajes favoritos seleccionados.</p>;
  }

  return (
    <div className="favoritos-container">
      <h1>Personajes Favoritos</h1>
      <div className="favoritos-grid">
        {favoritos.map((personaje) => (
          <div key={personaje.id} className="favorito-card">
            <img
              src={personaje.image}
              alt={personaje.name}
              className="favorito-card-img"
            />
            <h3>{personaje.name}</h3>
            <p><strong>Raza:</strong> {personaje.race}</p>
            <div className="favorito-acciones">
              <button
                className="btn-detalle"
                title="Ver Detalle"
              >
                <Link to={`/character/${personaje.id}`}>Ver Detalle</Link>
              </button>
              <button
                onClick={() => eliminarFavorito(personaje.id)}
                className="btn-eliminar"
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favoritos;
