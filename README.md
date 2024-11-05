🌐 E-commerce con React + Vite

Nombre del proyecto
Página E-commerce con React

Este es un proyecto desarrollado en React usando Vite, con el objetivo de crear una página de comercio electrónico funcional. El proyecto utiliza Chakra UI para estilizar la interfaz de usuario, integrando también bibliotecas adicionales para la gestión de datos y funcionalidades.

🎯 Objetivo del proyecto
Desarrollar una página de comercio electrónico aplicando componentes y conceptos fundamentales de React, como Button, Box, y otros elementos de interfaz. Además, se busca integrar una librería de estilos, en este caso Chakra UI, para mejorar la apariencia y experiencia de usuario.

🛠️ Tecnologías utilizadas
React: Framework para el desarrollo de la interfaz
Chakra UI: Librería de componentes de interfaz de usuario
Firebase: Base de datos y autenticación
Axios: Cliente HTTP para la comunicación con API externas
React Router: Manejo de rutas en la aplicación
CSS Modules: Estilos encapsulados para componentes
API Externa (DummyJSON): Proporciona datos simulados de productos y categorías
Manejo de Excepciones y Validación
Manejo de Errores: Todos los errores en las peticiones se capturan con un catch y se registran en la consola.
Validación de Inputs: Los formularios validan que los campos no estén vacíos y que los datos ingresados sean correctos (por ejemplo, cantidades mayores a cero).
Mensajes de Error: Los errores se muestran al usuario mediante mensajes en los componentes, sin alertas nativas del navegador.
Estructura del Proyecto
src/components: Contiene los componentes presentacionales y contenedores, como NavBar, ItemDetail, CartWidget y Checkout.
src/context: Define el contexto CartContext para manejar el estado global del carrito de compras.
src/hooks: Contiene hooks personalizados para manejar la lógica de productos y categorías.
src/services: Archivo products.service.js que contiene funciones para obtener datos de productos desde la API externa.
src/pages: Páginas principales de la aplicación, como Home, Category, Checkout, Payment.
Uso de la Aplicación
Navegación
La barra de navegación (NavBar) permite acceder al catálogo de productos y ver el carrito.
Las categorías se pueden seleccionar desde el menú para filtrar los productos disponibles.
Catálogo de Productos
Los productos se muestran en una lista en la página principal. Al seleccionar un producto, se accede al detalle del mismo (ItemDetail).
Desde el detalle, se pueden agregar productos al carrito en la cantidad deseada.
Carrito de Compras
Al acceder al carrito (CartWidget), el usuario puede ver todos los productos seleccionados y ajustar las cantidades.
La opción de “Comprar” en el carrito inicia el proceso de pago (Checkout).
Proceso de Compra
Al finalizar la compra, se redirige a la página de pago (Payment). Al completar el pago, el carrito se vacía y el estado se reinicia.
API Externa
DummyJSON: API para productos y categorías.
Llamadas Principales:
getAllProducts: Obtiene todos los productos.
getProductById(id): Obtiene un producto por ID.
getAllCategories: Obtiene todas las categorías de productos.
getProductsByCategory(categoryId): Filtra productos por categoría.

📦 Instalación y Configuración
Instalación de Node.js
Asegúrate de tener Node.js instalado en tu máquina. Puedes descargarlo desde nodejs.org.

Instalación de Dependencias
Clona el repositorio e instala las dependencias ejecutando el comando npm install.

Configuración de Firebase
Crea un proyecto en Firebase y obtén las credenciales de configuración. Configura Firebase en el archivo config.js en la carpeta src/firebase:

const firebaseConfig = { apiKey: "YOUR_API_KEY", authDomain: "YOUR_AUTH_DOMAIN", projectId: "YOUR_PROJECT_ID", storageBucket: "YOUR_STORAGE_BUCKET", messagingSenderId: "YOUR_MESSAGING_SENDER_ID", appId: "YOUR_APP_ID" }
Ejecutar el Proyecto
Para iniciar la aplicación en modo desarrollo, ejecuta el comando npm start.

🚀 Funcionalidades clave de cada componente
NavBar: Controla la navegación y el cambio de modo de color.
CartWidget: Visualiza la cantidad de productos en el carrito, sin lógica de cálculo directo en el widget.
ItemDetailContainer: Muestra el detalle de un producto y permite agregarlo al carrito.
CartContext: Maneja el estado global del carrito, permitiendo agregar, quitar y vaciar el carrito.
Loader: Indicador de carga en las peticiones asíncronas.

🧪 Ejecución de pruebas
Se recomienda realizar pruebas en la aplicación para verificar el correcto funcionamiento de cada componente y flujo de usuario.

📚 Recursos adicionales
Documentación de React
Documentación de Vite
Documentación de Chakra UI
Actualmente, hay dos plugins oficiales disponibles:

@vitejs/plugin-react usa Babel para Fast Refresh.
@vitejs/plugin-react-swc usa SWC para Fast Refresh.

Autor: Sastre Maximiliano.
