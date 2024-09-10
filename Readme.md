
## Propósito del Proyecto

El proyecto **"curso-react-native"** tiene como objetivo principal proporcionar una base sólida para el desarrollo de aplicaciones móviles utilizando React Native y Expo. Este proyecto es una introducción práctica a la creación de aplicaciones móviles, con un enfoque en la integración de datos externos y la configuración de un entorno de desarrollo completo.

### Descripción del Proyecto

- **Frontend:** Utiliza React Native para crear una interfaz de usuario que muestra una lista de juegos obtenidos a través de una API externa.
- **Backend:** Implementa un servidor Express que se encarga de realizar solicitudes a la API de Metacritic para obtener datos sobre juegos, gestionando CORS y proporcionando una capa intermedia entre el frontend y la API.
- **Dependencias Clave:**
  - **React Native**: Biblioteca principal para el desarrollo de la interfaz móvil.
  - **Expo**: Herramienta para el desarrollo y prueba de aplicaciones React Native.
  - **Express**: Framework para crear el servidor backend.
  - **Fetch**: Para realizar solicitudes HTTP desde el servidor.
  - **CORS**: Middleware para gestionar los permisos de origen cruzado en el servidor.
  - **Axios**: Aunque no se usa en la versión final del proyecto, se menciona como una dependencia común para realizar solicitudes HTTP.

### Estructura del Proyecto

- **`expo/AppEntry.js`**: Punto de entrada para la aplicación Expo.
- **`server.js`**: Archivo que configura y ejecuta el servidor Express.
- **`lib/metacritic.js`**: Archivo que contiene funciones para obtener datos de Metacritic.
- **Dependencias y DevDependencies**: Incluye las bibliotecas necesarias para el desarrollo y la ejecución del proyecto, como `react`, `react-native`, `expo`, `eslint`, y otras herramientas de desarrollo.

### Cómo Ejecutar el Proyecto

1. **Backend:**
   - Navegar al directorio del servidor y ejecutar `node server.js` para iniciar el servidor Express.

2. **Frontend:**
   - Navegar al directorio del frontend y usar los comandos de Expo para iniciar la aplicación en Android, iOS o web:
     - `expo start`
     - `expo start --android`
     - `expo start --ios`
     - `expo start --web`

### Contribuciones

Las contribuciones al proyecto son bienvenidas. Si deseas contribuir, por favor, abre un issue o envía un pull request con tus cambios.

---

Este README proporciona una visión general del propósito del proyecto y de cómo se configura y ejecuta. Ajusta o amplía la información según sea necesario para reflejar los detalles específicos de tu proyecto.
