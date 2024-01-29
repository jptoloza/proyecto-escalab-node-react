Proyecto Escalab
================

Descripción:
La función de aplicación es una intranet para alumnos de universidad, dede pueden obtener información de noticias, encuestas, solicitar asesoria académica y justificar inasistencias de actividades académicas obligatorias o evaluadas.
Existen al menos 3 perfiles o roles de usuarios: administrador, supervisor y cliente, se pueden agregar más perfiles dependiendo de la necesidas y acceso a futuros módulos.


ToDo:
- Asesoria
- Inasistencias
- Documentos
- Encuestas
- Ayuda




Backend NodeJS
--------------

https://escalab-server-api.herokuapp.com/

- Construcción con Node.js, MongoDB, Express, Mongoose y Socket.io (para notifificaciones)
- APIS REST
- Patrón de diseño: Inyección de depencias
- Uso de JWT
- Swagger para el controlador de usuarios: https://escalab-server-api.herokuapp.com/api.doc
- Despliegue en Heroku: https://escalab-server-api.herokuapp.com/



Frontend ReactJS
----------------

https://escalab-react-jptoloza-gmailcom.vercel.app/login

- Conexión vía axios con Rest API en Heroku, interación con Firebase Storage para almacenaje de imagenes.
- Optimización de rutas con lazy loading
- Implementación de página 404
- Implemantación de useSocket para la recepción en tiempo real de notificaciones
- PropType en DialogComponent, SearchToolBarComponent, TabPanelComponent
- Empaquetado con Webpacl y Babel
- Despliegue en vercel: https://escalab-react-jptoloza-gmailcom.vercel.app/login
- Aplicación de ErrorBoundary


Usuario de prueba:
- Administrador
  user: escalabproyadm@gmail.com
  password; Escalador01

- Cliente
  user: proyectalumno@gmail.com
  password: Calador02

