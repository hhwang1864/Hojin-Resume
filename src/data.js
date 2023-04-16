
import HweeterPhoto from "./assets/portfolioImages/hweeter-photo.png";
import PokemonBattles from "./assets/portfolioImages/pokemon-battles.png";
import Page from "./assets/portfolioImages/intropage.jpg";
import AWS from "./assets/portfolioImages/s3.PNG";
import Todo from "./assets/portfolioImages/todo.jpg"

// in progress projects

import Servista from './assets/portfolioImages/servista.PNG'
import landingPage from './assets/portfolioImages/url.jpg'

const ProjectsData = [

  {
    id: "Hweeter",
    img: HweeterPhoto,
    name: "Hweeter. (Twitter clone + news API)",
    stack: ["< News API /> ", "< React.js /> ", "<Firebase>"],
    live: "https://hhwang1864.github.io/Hwitter/",
    source: "https://github.com/hhwang1864/Hwitter/",
    description:
        "Responsive website which integrates News API to pull Current News data. When user is not logged in news can be viewed. When logged in, User can Update, Delete, Post, Edit their unique comments through No SQL of Google's Firebase.",
  },

  {
    id: "Pokemon Battles",
    img: PokemonBattles,
    name: "Pokemon Battles",
    stack: ["< HTML />", "< Express.js />", "< CSS />"],
    live: "https://github.com/tinaaiscoding/pokemon-game",
    source: "https://github.com/tinaaiscoding/pokemon-game",
    description:
        "Group project where users are allowed to catch and fight through battling pokemons. Be the Pokemon Master and catch 'em ALL!",
  },
  {
    id: "cloud-storage",
    img: AWS,
    name: "Cloud Storage with AWS Simple Storage Service",
    stack: ["< AWS S3 /> " , "< JavaScript /> " , "< Express.js />"],
    live: "",
    source: "https://github.com/rimshub/cloud-storage-s3",
    description:
        "Store images directly to Amazon S3 from user application, retrieve images from S3 bucket from anywhere on the web, and reduce the load on server",
  },

  {
    id: "todo",
    img: Todo,
    name: "JavaScript REACT NATIVE Todo App",
    stack: ["< JavaScript />  ", "< React Native />"],
    live: "https://rimshub.github.io/JavaScript-Todo-App/",
    source: "https://github.com/rimshub/JavaScript-Todo-App",
    description:
        "Responsive JS react native todo app with color theme switcher. Xcode were used for JAVA sources. ",
  },

  {
    id: "dropdown-nav",
    img: Page,
    name: "Homepage with dropdown navigation / Figma to React",
    stack: ["< React.js />   ", "< CSS3 />"],
    live: "https://rimshub.github.io/figma-design-to-reactjs/",
    source: "https://github.com/rimshub/figma-design-to-reactjs",
    description:
        "This challenge from frontendmentor tested my skills to create dropdown navigation menus, a common pattern on larger sites. It also has some nice basic layout challenge",
  },

];

const InprogressProjectsData = [

  {
    id: "servista",
    img: Servista,
    name: "Servista",
    stack: ["< Flutter />", "< NodeJS />", "< Blockchain />"],
    live: "",
    source: "https://github.com/rimshub/servista",
    description:
        "A cross-platform app that connects local service providers with customers. The goal is to maximize the income of local professionals while ensuring the security and comfort of customers",
  },

  {
    id: "url-short",
    img: landingPage,
    name: "URL shortening API landing page",
    stack: ["< JavaScript />", "< NodeJS />"],
    live: "",
    source: "https://github.com/rimshub/URL-shortening-API-landing-page",
    description:
        "Integrate with the shrtcode URL shortening API and play with browser storage in this landing page challenge",
  },

];

export default {ProjectsData, InprogressProjectsData}
