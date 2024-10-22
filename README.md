🌐 E-commerce con React + Vite

Nombre del proyecto: Página E-commerce con React
    Este es un proyecto desarrollado en React usando Vite, con el objetivo de crear una página de comercio electrónico funcional. El proyecto utiliza Chakra UI para estilizar la interfaz de usuario, integrando también bibliotecas adicionales para la gestión de datos y funcionalidades.

🎯 Objetivo del proyecto:
 Desarrollar una página de comercio electrónico aplicando componentes y conceptos fundamentales de React, como Buttons, Box, y otros elementos de interfaz. Además, se busca integrar una librería de estilos, en este caso Chakra UI, para mejorar la apariencia y experiencia de usuario.

🛠️ Tecnologías utilizadas
React: Biblioteca principal para la creación de interfaces de usuario.
Vite: Herramienta rápida para el desarrollo front-end.
Chakra UI: Librería de componentes de interfaz de usuario para React.
React Router DOM: Navegación entre páginas y rutas dinámicas.
Axios: Para el consumo de APIs.
Firebase: Backend para la gestión de autenticación y almacenamiento de datos.
Framer Motion: Animaciones para mejorar la experiencia de usuario.
PropTypes: Validación de propiedades de componentes.

📁 Estructura del proyecto
├── dist/                         # Archivos de producción generados por Vite
│   ├── assets/                   # Archivos estáticos (imágenes, íconos)
│   └── index.html                # Entrada principal del proyecto
├── node_modules/                 # Dependencias de npm
├── public/                       # Archivos públicos
├── src/                          # Código fuente del proyecto
│   ├── assets/                   # Imágenes y recursos
│   │   ├── logoFanaticos.png     # Logo del proyecto
│   │   └── react.svg             # Ícono de React
│   ├── components/               # Componentes reutilizables
│   │   ├── CartWidget/           # Widget del carrito de compras
│   │   ├── ItemCount/            # Contador de ítems para añadir al carrito
│   │   ├── ItemDetailContainer/  # Detalles de productos
│   │   ├── ItemListContainer/    # Lista de productos
│   │   ├── Loader/               # Componente de carga
│   │   └── NavBar/               # Barra de navegación
│   ├── context/                  # Contexto global para la gestión del carrito
│   ├── layouts/                  # Diseños generales de la aplicación
│   │   └── MainLayout.jsx        # Layout principal de la aplicación
│   ├── pages/                    # Páginas de la aplicación
│   │   ├── ConditionalRendering  # Página de ejemplos condicionales
│   │   ├── Events                # Página para gestión de eventos
│   │   ├── Home                  # Página principal
│   │   └── NotFound              # Página 404
│   ├── router/                   # Configuración de rutas
│   │   └── MainRouter.jsx        # Rutas principales
│   ├── services/                 # Lógica para la comunicación con APIs
│   │   └── products.service.js   # Servicio para obtener productos de Firebase
│   ├── styles/                   # Archivos de estilos CSS
│   │   └── App.jsx               # Estilos generales de la app
│   └── main.jsx                  # Entrada principal de la aplicación React
├── .eslintrc.js                  # Configuración de ESLint
├── .prettierrc                   # Configuración de Prettier
├── package.json                  # Dependencias del proyecto
├── package-lock.json             # Archivo de bloqueo de versiones
├── vite.config.js                # Configuración de Vite
└── README.md                     # Documentación del proyecto

🚀 Funcionalidades clave
Catálogo de productos: Visualiza una lista de productos obtenidos desde Firebase.
Carrito de compras: Añade, elimina y ajusta la cantidad de productos en el carrito.
Barra de navegación: Explora las categorías de productos.
Detalles de productos: Cada producto tiene una página de detalle donde se puede consultar la descripción, precio y stock.
Animaciones: Transiciones suaves en la interfaz gracias a Framer Motion.
Modo oscuro: Alterna entre modo claro y oscuro usando Chakra UI.
Validación de propiedades: Uso de PropTypes para validar las propiedades de los componentes.

📦 Instalación y configuración
Clona el repositorio: git clone https://github.com/sastremax/pre-entrega2-sastre

Instala las dependencias: npm install

Inicia el servidor de desarrollo: npm run dev

Construye el proyecto para producción: npm run build

🧪 Ejecución de pruebas

📚 Recursos adicionales
Documentación de React
Documentación de Vite
Documentación de Chakra UI

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
