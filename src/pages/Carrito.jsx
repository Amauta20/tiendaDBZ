import React, { useContext } from 'react';
import { CarritoContext } from '../context/CarritoContext';
import { useNavigate } from 'react-router-dom';
import '../styles/carrito.css';

const Carrito = () => {
  const { carrito, agregarProducto, eliminarProducto, vaciarCarrito } = useContext(CarritoContext);
  const navigate = useNavigate();

  // Calcular resumen del carrito
  const totalUnidades = carrito.reduce((acc, item) => acc + item.cantidad, 0);
  const totalPrecio = carrito
    .reduce((acc, item) => acc + (item.price || 0) * item.cantidad, 0)
    .toFixed(2);

  return (
    <div className="carrito-container">
      <h1>Carrito de Compras</h1>

      {/* Resumen */}
      <div className="carrito-resumen">
        <p><strong>Unidades compradas:</strong> {totalUnidades}</p>
        <p><strong>Total comprado:</strong> {totalPrecio} ki</p>
        <div className="carrito-botones">
          <button onClick={vaciarCarrito} className="btn-vaciar">
            Vaciar carrito
          </button>
          <button onClick={() => navigate('/checkout')} className="btn-checkout">
            Ir al checkout
          </button>
        </div>
      </div>

      {/* Productos del carrito */}
      {carrito.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <div className="productos-carrito">
          {carrito.map((producto) => (
            <div key={producto.id} className="producto-carrito">
              <img src={producto.image} alt={producto.name} className="producto-carrito-img" />
              <div className="producto-info">
                <h3>{producto.name}</h3>
                <p><strong>Precio unitario:</strong> {producto.price?.toFixed(2) || 0} ki</p>
                <p><strong>Total:</strong> {(producto.price * producto.cantidad).toFixed(2)} ki</p>
                <div className="producto-acciones">
                  <button
                    onClick={() => agregarProducto({ ...producto, cantidad: 1 })}
                    className="btn-incrementar"
                  >
                    +
                  </button>
                  <span className="producto-cantidad">{producto.cantidad}</span>
                  <button
                    onClick={() => eliminarProducto(producto.id)}
                    className="btn-decrementar"
                  >
                    -
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Carrito;
