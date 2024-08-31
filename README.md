# Travel Buddy 🧳✈️


## Index 📝

- [Description](#description-)
- [Installation](#installation-)
- [Prerequisites](#prerequisites-)
- [Project Installation](#project-installation-)
- [Use](#use-)
- [Project Structure](#project-structure-)
- [Technologies](#technologies-)
- [Contribution](#contribution-)
- [Project Conventions](#project-conventions-)
- [Developers](#developers-)
- [Screenshots](#screenshots-)

## Description 💡
Travel Buddy is a travel planner app that provides recommendations of tourist attractions to its registered users. The goal of this development is to enable users to find uselful information about weather and tourist attractions before travelling to a certain destination. Take a look at our app here https://travel-buddy-f5.netlify.app/

## Installation 💾

### Prerequisites

- Visual Studio Code, Git Bash, Vite, Node.js (14 or superior), npm (version 6 or superior), React, TailwindCSS 


### Project Installation

1. Clone the frontend repository:

```bash
  git clone https://github.com/Carlassanchez24/TravelBuddy.git
```

2. Enter the project directory:
```bash
  cd TravelBuddy
```

3. Install the dependencies:
```bash
  npm i
  npm run dev
```

4. Clone the backend repository and follow its instructions:

```bash
  git clone https://github.com/jess-ar/TravelBuddyBack
```


## Use ⌨️

In order to visualize the project:

1. Run the development server:
   ```bash
   npm install 
   npm run dev
   ```
2. Open the local host in your browser to view the application.


## Project Structure 📐

```plaintext
/
├── public
├── src
│   ├── components/
│   │   ├── ui
│   │         ├── 
│   │         └── 
│   ├── config
│   ├── hooks
│   ├── layout
│   ├── pages
│   ├── router
│   ├── services
│   ├── utils
│   ├── index.css
│   └── main.jsx
│   └── setupTests.js
├── components.json
├── eslint.config.js
├── index.html
├── jsconfig.json
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── vite.config.js

```

- **public/:** Contains the project's static resources such as images, icons, and fonts.
- **src/:** Contains the source files of the application.
  - **_components/:_** Contains React's reusable components.
    -  **_ui/:_** Contains the components imported from the shadcn library.  
  - **_config/:_** Contains the urls.js file, which helps us streamline the API call.
  - **layout:** Folder containing the paths to the application's dynamic pages.
  - **_pages:_** Contains all the pages that make up the different views of the app.
  - **_router:_** Contains the file index.jsx with the application's routing logic.
  - **_services:_** Contains the file useApi.jsx with the API call reused in all sections of the application.


## Technologies 🔬

- [HTML5](https://developer.mozilla.org/es/docs/Web/Guide/HTML/HTML5)
- [CSS3](https://developer.mozilla.org/es/docs/Web/CSS/CSS3)
- [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript)
- [React.js](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [Shadcn // ui](https://ui.shadcn.com/)


## Contribution 💻

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Make your changes and commit.
4. Push your branch to your fork: `git push origin feature-name`.
5. Open a pull request.

## Project Conventions

Use of GitFlow.

We work from and to the dev branch.

CSS styles with Tailwind CSS.

Use of [shadcn]() library for certain components.

Naming of directories and files following the scheme below:

```bash
 components
    iamAComponent 📂
        IamAComponent.jsx
```

## Developers 👩‍💻

<p> <a href="https://github.com/jess-ar">
    <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"> **Jess Arroyo**</a></p>
    
<p> <a href="https://github.com/pilimuino">
    <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"> **Pili Muiño**</a></p>

<p> <a href="https://github.com/Carlassanchez24">
    <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"> **Carla Sánchez**</a></p>
    
<p> <a href="https://github.com/evymari">
    <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"> **Evelyn Quevedo**</a></p>
    
<p> <a href="https://github.com/loren-2">
    <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"> **Lorena**</a></p>


## Screenshots 📸

<a href="https://ibb.co/Hxc5kLH"><img src="https://i.ibb.co/0F0HdpG/INSPIRA-ME.png" alt="INSPIRA-ME" border="0"></a>
![HOME]()
![WELCOME]()
![LOGIN]()
![SIGNUP]()
![INSPIRATION]()

