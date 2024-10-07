import "./styles.css";
import "./content.js";
import { renderPageHome, renderPageMenu, renderPageAbout } from "./content.js";
import * as sel from "./selectors.js";

sel.doc.addEventListener('DOMContentLoaded', renderPageHome);
sel.homeBtn.addEventListener('click', renderPageHome);
sel.menuBtn.addEventListener('click', renderPageMenu);
sel.aboutBtn.addEventListener('click', renderPageAbout);
