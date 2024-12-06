import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { CarritoContext } from '../context/CarritoContext';
import { FavoritosContext } from '../context/FavoritosContext';
import '../styles/catalogo.css';

const Catalogo = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const { carrito, agregarProducto } = useContext(CarritoContext);
  const { agregarFavorito, eliminarFavorito, favoritos } = useContext(FavoritosContext);
  const navigate = useNavigate();

  const [productos, setProductos] = useState([]);
  const [filteredProductos, setFilteredProductos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRace, setSelectedRace] = useState('');
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    if (isAuthenticated === false) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await fetch(
          `https://dragonball-api.com/api/characters?page=${currentPage}&limit=${itemsPerPage}`
        );
        const data = await response.json();
        setProductos(data.items);
        setFilteredProductos(data.items);
        setTotalPages(data.meta.totalPages || 1);
        setLoading(false);
      } catch (error) {
        console.error('Error al cargar productos:', error);
        setLoading(false);
      }
    };

    fetchProductos();
  }, [currentPage, itemsPerPage]);

  useEffect(() => {
    // Filtrar productos por raza y búsqueda
    let filtered = productos;

    if (selectedRace) {
      filtered = filtered.filter((p) => p.race.toLowerCase() === selectedRace.toLowerCase());
    }

    if (searchTerm) {
      filtered = filtered.filter((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProductos(filtered);
  }, [searchTerm, selectedRace, productos]);

  const calculatePrice = (ki) => {
    const numericKi = parseInt(ki.replace(/[^0-9]/g, ''));
    return (numericKi / 1000).toFixed(2);
  };

  const getUnidadesCompradas = (id) => {
    const productoEnCarrito = carrito.find((item) => item.id === id);
    return productoEnCarrito ? productoEnCarrito.cantidad : 0;
  };

  const handleFavoriteToggle = (producto) => {
    if (favoritos.some((fav) => fav.id === producto.id)) {
      eliminarFavorito(producto.id);
    } else {
      agregarFavorito(producto);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  if (!isAuthenticated) {
    return null;
  }

  if (loading) {
    return <div className="loading">Cargando catálogo...</div>;
  }

  return (
    <div className="catalogo-container">
      <h1>Catálogo de Productos</h1>

      {/* Resumen */}
      <div className="resumen">
        <p>Productos en el carrito: {carrito.reduce((acc, item) => acc + item.cantidad, 0)}</p>
        <p>Total Precio: {carrito.reduce((acc, item) => acc + item.price * item.cantidad, 0).toFixed(2)} ki</p>
        <button onClick={() => navigate('/carrito')}>Ir al carrito</button>
      </div>

      {/* Filtros */}
      <div className="filtros">
        <select onChange={(e) => setSelectedRace(e.target.value)} value={selectedRace}>
          <option value="">Todas las Razas</option>
          {[...new Set(productos.map((p) => p.race))].map((race) => (
            <option key={race} value={race}>
              {race}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Buscar personaje..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Productos */}
      <div className="productos-grid">
        {filteredProductos.map((producto) => (
          <div key={producto.id} className="producto-card">
            <img src={producto.image} alt={producto.name} />
            <h3>{producto.name}</h3>
            <p>Precio: {calculatePrice(producto.ki)} ki</p>
            <p>{producto.race}</p>
            <button
              onClick={() =>
                agregarProducto({
                  id: producto.id,
                  name: producto.name,
                  price: parseFloat(calculatePrice(producto.ki)),
                  image: producto.image,
                })
              }
            >
              Comprar
            </button>
            <span> | Uni: {getUnidadesCompradas(producto.id)}</span>
            <button onClick={() => handleFavoriteToggle(producto)}>
              {favoritos.some((fav) => fav.id === producto.id) ? 'Quitar de Favoritos' : 'Agregar a Favoritos'}
            </button>
            <button className="btn-detalle">
              <Link to={`/character/${producto.id}`}>Ver Detalle</Link>
            </button>
          </div>
        ))}
      </div>

      {/* Paginación */}
      <div className="paginacion">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className={currentPage === index + 1 ? 'active' : ''}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Catalogo;
