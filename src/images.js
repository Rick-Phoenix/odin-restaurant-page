import odinLogo from "./Images/Odin-logo.png";
import * as sel from './selectors.js';

function createImage(source, ...classes) {
    const img = document.createElement('img');
    img.src = source;
    img.classList.add(...classes);
    return img;
}

function create(type, ...classes) {
    const element = document.createElement(type);
    element.classList.add(...classes);
    return element;
}

const logo = createImage(odinLogo, 'logo');
const titleBox = create('div', 'titleBox');
const titleMain = create('div', 'titleMain');
titleMain.textContent = "Pizzeria da Odino";
const subtitle = create('div', 'subtitle');
subtitle.textContent = 'The best pizza in all the nine realms!';

export default (() => {
    sel.header.insertBefore(logo, sel.nav);
    sel.header.appendChild(titleBox);
    titleBox.append(titleMain, subtitle, sel.nav);
})();

