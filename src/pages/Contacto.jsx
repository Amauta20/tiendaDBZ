import React, { useState } from 'react';
import '../styles/contacto.css';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: '',
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!formData.nombre || !formData.email || !formData.mensaje) {
      setErrorMessage('Por favor, completa todos los campos.');
      setSuccessMessage('');
      return;
    }

    // Simulación de envío exitoso
    setSuccessMessage('Tu mensaje ha sido enviado con éxito. ¡Gracias por contactarnos!');
    setErrorMessage('');
    setFormData({
      nombre: '',
      email: '',
      mensaje: '',
    });
  };

  return (
    <div className="contacto-container">
      <h1 className="contacto-title">Contáctanos</h1>
      <p className="contacto-description">
        Si tienes preguntas, comentarios o necesitas ayuda, llena el siguiente formulario y nos pondremos en contacto contigo lo antes posible.
      </p>
      <form className="contacto-form" onSubmit={handleFormSubmit}>
        {successMessage && <p className="contacto-success">{successMessage}</p>}
        {errorMessage && <p className="contacto-error">{errorMessage}</p>}
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="mensaje">Mensaje:</label>
          <textarea
            id="mensaje"
            name="mensaje"
            rows="5"
            value={formData.mensaje}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <button type="submit" className="contacto-submit-btn">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Contacto;
