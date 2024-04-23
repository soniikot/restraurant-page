console.log('Hello');
import './style.css';

import { createPage } from "./home.js";
import { createMenuPage} from "./menu.js";
import { createContactPage } from "./contact.js";

document.getElementById("homeButton").addEventListener("click", createPage);
<<<<<<< HEAD
window.addEventListener('DOMContentLoaded',createPage);
=======
window.addEventListener('load',createPage);
>>>>>>> 7ea8a62e5f2029dbfe2d3feeeac70edc7df6620a

document.getElementById("menuButton").addEventListener("click", createMenuPage);

document.getElementById("contactButton").addEventListener("click", createContactPage );
