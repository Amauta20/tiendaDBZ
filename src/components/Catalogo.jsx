import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Catalogo = () => {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchCharacters = async (page = 1) => {
    try {
      const response = await axios.get(`https://dragonball-api.com/api/characters?page=${page}&limit=10`);
      console.log('Datos de la API:', response.data);
      setCharacters(response.data.items); // Accedemos a los personajes dentro de `items`
    } catch (error) {
      console.error('Error al obtener los personajes:', error);
    }
  };

  useEffect(() => {
    fetchCharacters(currentPage);
  }, [currentPage]);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div>
      <h1>Catálogo de Personajes - Dragon Ball</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
        {characters.map((character) => (
          <div key={character.id} style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px', textAlign: 'center' }}>
            <img
              src={character.image}
              alt={character.name}
              style={{ width: '150px', height: '150px', objectFit: 'cover' }}
            />
            <h4>{character.name}</h4>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Anterior
        </button>
        <span style={{ margin: '0 15px' }}>Página {currentPage}</span>
        <button onClick={handleNextPage}>
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default Catalogo;
