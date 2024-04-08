console.log('Hello');
import './style.css';

import { createPage } from "./home.js";
import { createMenuPage} from "./menu.js";
import { contact } from "./contact.js";

document.getElementById("homeButton").addEventListener("click", createPage);
window.addEventListener("load", createPage);

document.getElementById("menuButton").addEventListener("click", createMenuPage);

document.getElementById("contactButton").addEventListener("click", contact);