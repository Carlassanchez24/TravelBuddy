# Travel Buddy


## Índice 📝

- [Descripción](#descripción-)
- [Instalación](#instalación-)
  - [Requisitos previos](#requisitos-previos)
  - [Instalación del proyecto](#instalación-del-proyecto)
- [Uso](#uso-)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Tecnologías](#tecnologías-)
- [Contribuición](#contribuición-)
  - [Convenciones del proyecto](#convenciones-del-proyecto)
- [Developers](#developers-)
- [Capturas de pantalla](#capturas-de-pantalla)

## Descripción 💡



## Instalación 💾

### Requisitos previos


### Instalación del proyecto

1. Clonar el repositorio:

```bash
 git clone https://github.com/Carlassanchez24/TravelBuddy.git
```

2. Instalar dependencias:



## Uso ⌨️

Para visualizar el proyecto:

1. Ejecuta el servidor de desarrollo:
   ```bash
   npm run dev
   ```
2. Abre el local host en tu navegador para ver la aplicación.

## Estructura del proyecto 📐

```plaintext
/
├── public
├── src
│   ├── components/
│   │   ├── 
│   │   ├── 
│   │   └── 
│   ├── config
│   ├── hooks
│   ├── layout
│   ├── pages
│   ├── router
│   ├── services
│   ├── utils
│   ├── index.css
│   └── main.jsx
├── components.json
├── index.html
├── README.md
├── jsconfig.json
├── package-lock.json
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js

```

- **public/:** Contiene los recursos estáticos del proyecto como imágenes, iconos y fuentes.
- **src/:** Contiene los archivos fuente de la aplicación.
  - **_components/:_** Contiene los componentes reutilizables de React.
    - **_homepage/:_** Contiene todos los componentes, separados por carpetas individuales, que forman la parte de homepage del proyecto.
    - **_tracker/:_** Contiene todos los componentes, separados por carpetas individuales, que forman la parte de tracker del proyecto.
    - **_ui/:_** Contiene los componentes importados de la librería shadcn.
  - **_config/:_** Contiene el arcihvo urls.js, que nos ayuda a dinamizar la llamada a la API.
  - **layout:** Carpeta que contiene las rutas de los dos layouts principales (homepage y tracker) de la aplicación.
  - **_pages:_** Carpeta que contiene las rutas a las páginas dinámicas de la aplicación.
  - **_router:_** Dentro del que se encuentra index.jsx, que contiene la lógica de rutas de la aplicación.
  - **_services:_** Dentro del que se encuentra useApi.jsx con la llamada a la API reutilizada en todos los apartados de la aplicación.

## Tecnologías 🔬

- [HTML5](https://developer.mozilla.org/es/docs/Web/Guide/HTML/HTML5)
- [CSS3](https://developer.mozilla.org/es/docs/Web/CSS/CSS3)
- [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript)
- [React.js](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [Shadcn // ui](https://ui.shadcn.com/)

## Contribuición 💻

1. Haz fork al repositorio.
2. Crea una nueva rama: `git checkout -b feature-name`.
3. Haz tus cambios.
4. Haz push de tu rama: `git push origin feature-name`.
5. Haz un pull request.

### Convenciones del proyecto

Uso de GitFlow.

Trabajamos desde y a la rama dev.

Estilos CSS con Tailwind CSS.

Usamos librería [shadcn]() para ciertos componentes.

Nombramiento de las carpetas y documentos jsx:

```bash
 componentes
    soyUnComponente 📂
        SoyUnComponente.jsx
```

## Developers 👩‍💻

- [Jessica Arroyo](https://github.com/jess-ar)
- [Lorena Ballen](https://github.com/loren-2)
- [Pilar Muiño](https://github.com/pilimuino)
- [Carla Sánchez](https://github.com/Carlassanchez24)
- [Evelyn Quevedo](https://github.com/evymari)

## Capturas de Pantalla 📸
