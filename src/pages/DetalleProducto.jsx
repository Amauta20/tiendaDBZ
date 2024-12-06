import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CarritoContext } from '../context/CarritoContext'; // Importamos el contexto del carrito
import '../styles/detalleProducto.css';

const DetalleProducto = () => {
  const { id } = useParams(); // Obtener el ID del personaje desde la URL
  const navigate = useNavigate();
  const { agregarProducto } = useContext(CarritoContext); // Usamos el contexto del carrito
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await fetch(`https://dragonball-api.com/api/characters/${id}`);
        
        if (!response.ok) {
          // Manejar errores de la API
          throw new Error(`Error en la API: ${response.statusText}`);
        }

        const data = await response.json();
        setCharacter(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacter();
  }, [id]);

  if (loading) {
    return <div className="loading">Cargando detalles del personaje...</div>;
  }

  if (error) {
    return (
      <div className="error">
        <p>No se pudo cargar el personaje. Por favor, intenta nuevamente.</p>
        <button onClick={() => navigate(-1)}>Volver</button>
      </div>
    );
  }

  if (!character) {
    return (
      <div className="error">
        <p>El personaje no existe o no se pudo cargar.</p>
        <button onClick={() => navigate(-1)}>Volver</button>
      </div>
    );
  }

  const handleAgregarCarrito = () => {
    // Convertimos el personaje en un formato para el carrito
    const producto = {
      id: character.id,
      name: character.name,
      price: parseInt(character.ki.replace(/[^0-9]/g, '')) / 1000, // Calculamos el precio
      image: character.image,
    };
    agregarProducto(producto); // Agregamos al carrito usando el contexto
    alert(`${character.name} se ha agregado al carrito.`);
  };

  return (
    <div className="character-detail-container">
      <button className="back-button" onClick={() => navigate(-1)}>
        Volver
      </button>
      <h1>{character.name}</h1>
      <div className="character-info">
        <img src={character.image} alt={character.name} />
        <div className="character-details">
          <p><strong>Raza:</strong> {character.race}</p>
          <p><strong>Género:</strong> {character.gender}</p>
          <p><strong>Ki:</strong> {character.ki}</p>
          <p><strong>Afiliación:</strong> {character.affiliation}</p>
          <p><strong>Descripción:</strong> {character.description}</p>
          <button onClick={handleAgregarCarrito} className="add-to-cart-button">
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetalleProducto;
