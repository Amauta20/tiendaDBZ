import React from 'react';
import '../styles/inicio.css'; // Archivo de estilos para la página de inicio

const Inicio = () => {
  return (
    <div className="inicio-container">
      <h1>Bienvenidos a la Página de Dragon Ball</h1>
      <p>
        Esta plataforma interactiva está dedicada al universo de **Dragon Ball**, permitiendo a los usuarios explorar, gestionar y disfrutar de información sobre los personajes más icónicos de la serie. Aquí encontrarás funcionalidades clave que hacen de esta página una experiencia única.
      </p>

      <h2>Principales Funcionalidades</h2>
      <ul>
        <li>
          <strong>Catálogo de Personajes:</strong> Navega por una extensa lista de personajes, filtrando por raza o buscándolos por nombre. Descubre su información y agrega a favoritos o al carrito.
        </li>
        <li>
          <strong>Carrito de Compras:</strong> Agrega personajes al carrito, ajusta cantidades, y calcula totales de manera dinámica. Los datos se guardan automáticamente.
        </li>
        <li>
          <strong>Favoritos:</strong> Marca personajes como favoritos, accede a ellos rápidamente y gestiona tus selecciones fácilmente.
        </li>
        <li>
          <strong>Checkout:</strong> Completa tu compra simulada con un formulario y un resumen detallado de los personajes seleccionados.
        </li>
        <li>
          <strong>Contacto:</strong> Envía tus consultas o sugerencias a través de un formulario de contacto.
        </li>
        <li>
          <strong>Autenticación:</strong> Asegura una experiencia personalizada con acceso exclusivo a funcionalidades clave como el carrito y favoritos.
        </li>
      </ul>

      <h2>Resumen</h2>
      <p>
        Esta página dedicada a **Dragon Ball** permite explorar un catálogo interactivo, gestionar un carrito dinámico con cantidades y totales, marcar personajes favoritos, y realizar una simulación de compra completa. Además, incluye autenticación para una experiencia personalizada y un formulario de contacto para enviar sugerencias o preguntas. Todo está diseñado para ofrecer una experiencia interactiva y eficiente para los fans de la serie.
      </p>
    </div>
  );
};

export default Inicio;
