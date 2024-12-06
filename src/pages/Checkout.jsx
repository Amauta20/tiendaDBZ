import React, { useContext, useState } from 'react';
import { CarritoContext } from '../context/CarritoContext';
import { useNavigate } from 'react-router-dom';
import '../styles/checkout.css';

const Checkout = () => {
  const { carrito, eliminarProducto, vaciarCarrito } = useContext(CarritoContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nombre: '',
    direccion: '',
    email: '',
    telefono: '',
  });

  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleConfirmarCompra = () => {
    if (!formData.nombre || !formData.direccion || !formData.email || !formData.telefono) {
      setError('Por favor, completa todos los campos.');
      return;
    }
    setError(null);
    alert('Compra realizada con éxito. ¡Gracias por tu pedido!');
    vaciarCarrito();
    navigate('/');
  };

  const calcularTotalUnidades = () =>
    carrito.reduce((total, producto) => total + producto.cantidad, 0);

  const calcularTotalPrecio = () =>
    carrito.reduce((total, producto) => total + producto.cantidad * producto.price, 0).toFixed(2);

  return (
    <div className="checkout-container">
      {/* Formulario de datos */}
      <div className="checkout-form">
        <h2>Datos de Envío</h2>
        {error && <p className="checkout-error">{error}</p>}
        <form>
          <label>Nombre:</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleInputChange}
          />
          <label>Dirección:</label>
          <input
            type="text"
            name="direccion"
            value={formData.direccion}
            onChange={handleInputChange}
          />
          <label>Correo Electrónico:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <label>Teléfono:</label>
          <input
            type="tel"
            name="telefono"
            value={formData.telefono}
            onChange={handleInputChange}
          />
          <button
            type="button"
            onClick={handleConfirmarCompra}
            className="checkout-confirm-btn"
          >
            Confirmar Compra
          </button>
        </form>
      </div>

      {/* Lista de productos */}
      <div className="checkout-product-list">
        <h2>Resumen de la Compra</h2>
        {carrito.length === 0 ? (
          <p>No hay productos en el carrito.</p>
        ) : (
          <div>
            <table className="checkout-table">
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Unidades</th>
                  <th>Precio Unitario</th>
                  <th>Subtotal</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {carrito.map((producto) => (
                  <tr key={producto.id}>
                    <td className="checkout-product-info">
                      <img
                        src={producto.image}
                        alt={producto.name}
                        className="checkout-product-img"
                      />
                      <span>{producto.name}</span>
                    </td>
                    <td>{producto.cantidad}</td>
                    <td>{producto.price} ki</td>
                    <td>{(producto.cantidad * producto.price).toFixed(2)} ki</td>
                    <td>
                      <button
                        className="checkout-delete-btn"
                        onClick={() => eliminarProducto(producto.id)}
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="checkout-summary">
              <p><strong>Total de unidades:</strong> {calcularTotalUnidades()}</p>
              <p><strong>Total a pagar:</strong> {calcularTotalPrecio()} ki</p>
              <button onClick={vaciarCarrito} className="checkout-vaciar-btn">
                Vaciar Carrito
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
