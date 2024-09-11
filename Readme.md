
## Propósito del Proyecto

El propósito principal de este proyecto es proporcionar una base sólida para el desarrollo de aplicaciones móviles utilizando **React Native** y **Expo**. Este proyecto sirve como una introducción práctica a la creación de aplicaciones móviles, con un enfoque en:

- **Integración de datos externos:** Utilizando una API para obtener y mostrar información en la aplicación.
- **Configuración de un entorno de desarrollo completo:** Para facilitar el desarrollo, prueba y despliegue de aplicaciones móviles.

## Descripción del Proyecto

El proyecto se compone de dos partes principales:

- **Frontend:** Desarrollado con **React Native**, muestra una interfaz de usuario interactiva que presenta una lista de juegos. Los datos sobre los juegos se obtienen a través de una API externa, proporcionando una experiencia actualizada y dinámica para el usuario.

- **Backend:** Implementado con **Express**, actúa como intermediario entre el frontend y la API de Metacritic. El servidor Express realiza solicitudes a la API, maneja los permisos de origen cruzado (CORS) y proporciona los datos necesarios al frontend.

## Componentes Principales

### `GameCard.js`

- **`GameCard`**: Muestra la información de un juego, incluyendo la imagen, título, descripción y puntuación.
- **`AnimatedCard`**: Añade una animación de opacidad a `GameCard` para mejorar la presentación visual.

### `Main.js`

- **`Main`**: Componente principal que utiliza `FlatList` para mostrar una lista de juegos obtenidos de la API. Incluye un indicador de carga (`LoadingOverlay`) y un logo (`Logo`).

### `LoadingOverlay.js`

- **`LoadingOverlay`**: Muestra un indicador de carga centrado en la pantalla mientras se obtienen datos sobre los juegos.

## Estructura del Proyecto

- **`App.js`**: Punto de entrada para la aplicación Expo.
- **`server.js`**: Configura y ejecuta el servidor Express.
- **`lib/metacritic.js`**: Contiene funciones para obtener datos de la API de Metacritic.

## Cómo Ejecutar el Proyecto

### Backend

1. Navega al directorio del servidor.
2. Ejecuta `node server.js` para iniciar el servidor Express.

### Frontend

1. Navega al directorio del frontend.
2. Utiliza los comandos de Expo para iniciar la aplicación en Android, iOS o web:
   - `expo start` para iniciar la aplicación en modo de desarrollo.
   - `expo start --android` para iniciar la aplicación en un dispositivo Android.
   - `expo start --ios` para iniciar la aplicación en un dispositivo iOS.
   - `expo start --web` para iniciar la aplicación en un navegador web.

## Dependencias

Este proyecto utiliza las siguientes dependencias:

- **React Native:** Biblioteca principal para el desarrollo de la interfaz móvil.
- **Expo:** Herramienta para el desarrollo y prueba de aplicaciones React Native.
- **Express:** Framework para construir el servidor backend.
- **CORS:** Middleware para gestionar permisos de origen cruzado.

## Contribuciones

Si deseas contribuir a este proyecto, siéntete libre de hacer un fork y enviar un pull request. Asegúrate de seguir las mejores prácticas de codificación y de probar tus cambios antes de enviarlos.


## IMG

  ![pruebasreactNative](https://github.com/user-attachments/assets/1d6bf144-8293-46be-ba9c-87ab4243deda)
## Avances

  
![avances](https://github.com/user-attachments/assets/340f70c2-e1ab-40aa-96fa-43da10affb30)

