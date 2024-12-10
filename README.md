# GokuReact
Esta página dedicada a **Dragon Ball** permite explorar un catálogo interactivo, gestionar un carrito dinámico con cantidades y totales, marcar personajes favoritos, y realizar una simulación de compra completa. Además, incluye autenticación para una experiencia personalizada y un formulario de contacto para enviar sugerencias o preguntas. 

# Aplicación de Gestión de Personajes - Dragon Ball

## Descripción General

Esta aplicación es una plataforma interactiva que permite a los usuarios explorar un catálogo de personajes de Dragon Ball, gestionar su carrito de compras, marcar personajes como favoritos y realizar un proceso de checkout. Además, incluye un formulario de contacto para que los usuarios puedan comunicarse con el soporte. La aplicación implementa características de autenticación y gestión de estado global para mejorar la experiencia del usuario.

---

## Funcionalidades Principales

### 1. **Inicio de Sesión**
- Los usuarios deben iniciar sesión para acceder a las secciones protegidas de la aplicación.
- Valida las credenciales contra una lista de usuarios predefinidos.
- Maneja el estado de autenticación con `AuthContext`.

### 2. **Catálogo de Personajes**
- Muestra una lista paginada de personajes.
- Funciones destacadas:
  - **Búsqueda por nombre**: Encuentra personajes rápidamente.
  - **Filtrado por raza**: Selecciona personajes según su raza.
  - **Botones de acción**:
    - Comprar.
    - Agregar a favoritos.
    - Ver detalles.
- Resumen de productos en el carrito con el total de unidades y precio.

### 3. **Carrito de Compras**
- Gestiona los productos agregados al carrito.
- Funcionalidades incluidas:
  - Aumentar o disminuir la cantidad de unidades.
  - Eliminar productos.
  - Vaciar el carrito por completo.
- Muestra el total de unidades y el precio total.

### 4. **Favoritos**
- Almacena personajes seleccionados como favoritos.
- Funciones:
  - Visualizar lista de personajes favoritos.
  - Ver detalles del personaje.
  - Eliminar personajes de la lista.

### 5. **Checkout**
- Visualiza un resumen completo de los productos en el carrito.
- Incluye un formulario para ingresar datos del comprador y envío.
- Permite eliminar productos directamente desde la vista de checkout.

### 6. **Contacto**
- Formulario para que los usuarios puedan enviar mensajes al soporte.
- Validación de campos obligatorios:
  - Nombre.
  - Correo electrónico.
  - Mensaje.

---

## Usuarios Predefinidos

| **Usuario** | **Contraseña** |
|-------------|----------------|
| `usuario1`  | `usuario123`   |
| `usuario2`  | `usuario123`   |
| `usuario3`  | `usuario123`   |

### Notas:
- Los usuarios deben iniciar sesión para acceder a secciones protegidas como el carrito, checkout y favoritos.
- Las credenciales están configuradas estáticamente y se pueden modificar en el archivo correspondiente.

---

## Comandos para Ejecutar la Aplicación

### 1. Clonar el Repositorio
Si el proyecto está en un repositorio, clónalo con:

git clone [<URL-del-repositorio>](https://github.com/Amauta20/GokuReact.git)
cd GokuReact

# Dependencias Necesarias para la Aplicación

## Dependencias Principales
Estas son las librerías principales que necesitas para ejecutar la aplicación:

| **Dependencia**       | **Versión Recomendada** | **Descripción**                                                   |
|------------------------|-------------------------|-------------------------------------------------------------------|
| `react`               | `^18.0.0`              | Biblioteca principal para construir la interfaz de usuario.      |
| `react-dom`           | `^18.0.0`              | Permite manipular el DOM en aplicaciones React.                  |
| `react-router-dom`    | `^6.0.0`               | Librería para manejar el enrutamiento en React.                  |
| `axios`               | `^1.0.0`               | Cliente HTTP para hacer solicitudes a la API de Dragon Ball.     |

---

## Dependencias de Desarrollo
Estas librerías son útiles para mejorar la experiencia de desarrollo, como el linting, formateo, y compatibilidad.

| **Dependencia**          | **Versión Recomendada** | **Descripción**                                                                 |
|---------------------------|-------------------------|---------------------------------------------------------------------------------|
| `eslint`                 | `^8.0.0`               | Herramienta para identificar y reportar patrones problemáticos en JavaScript.  |
| `eslint-plugin-react`    | `^8.0.0`               | Reglas específicas para React en ESLint.                                       |
| `prettier`               | `^3.0.0`               | Formateador de código para mantener un estilo consistente.                     |
| `eslint-config-prettier` | `^8.0.0`               | Desactiva las reglas de ESLint que podrían entrar en conflicto con Prettier.   |
| `vite`                   | `^4.0.0`               | Herramienta de desarrollo rápida para construir aplicaciones React.            |

---

## Instalación de Dependencias

### 1. Dependencias Principales
Ejecuta el siguiente comando para instalar todas las dependencias principales:
```bash
npm install react react-dom react-router-dom axios

npm install --save-dev jest @testing-library/react @testing-library/jest-dom @testing-library/user-event

npm install --save-dev jest-environment-jsdom

