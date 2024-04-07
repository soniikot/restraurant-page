console.log('Hello');
import './style.css';

import { initialpageload } from "./pageload.js";
import { menutab } from "./menu.js";
import { abouttab } from "./about.js";

document.getElementById("homeButton").addEventListener("click", home);

document.getElementById("menuButton").addEventListener("click", menutab);

document.getElementById("aboutButton").addEventListener("click", abouttab);