import "./styles.css";
import "./content.js";
import { renderPageHome } from "./content.js";
import * as sel from "./selectors.js";

sel.doc.addEventListener('DOMContentLoaded', renderPageHome);
