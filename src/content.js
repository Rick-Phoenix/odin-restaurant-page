import odinLogo from "./Images/Odin-logo.png";
import homeone from "./Images/rest-1.jpg";
import hometwo from "./Images/rest-2.2.jpg";
import homethree from "./Images/rest-3.jpg";
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
const home1 = createImage(homeone, 'parimg');
const home2 = createImage(hometwo, 'parimg');
const home3 = createImage(homethree, 'parimg');


const titleBox = create('div', 'titleBox');
const titleMain = create('div', 'titleMain');
titleMain.textContent = "Pizzeria da Odino";
const subtitle = create('div', 'subtitle');
subtitle.textContent = 'The best pizza in all the nine realms!';
const separator = create('div', 'separator');
const separator2 = create('div', 'separator');
const separator3 = create('div', 'separator');
const contentHeader = create('h1', 'contentHeader');
const contentDesc = create('div', 'contentDesc');
const par1 = create('p', 'p1');
const par2 = create('p', 'p2');
const par3 = create('p', 'p3');

export default (() => {
    sel.header.insertBefore(logo, sel.nav);
    sel.header.appendChild(titleBox);
    titleBox.append(titleMain, separator, subtitle, sel.nav);
    sel.content.append(contentHeader, separator2, contentDesc);
    contentDesc.append(home1, par1, home2, par2, home3, par3);
})();

export const renderPageHome = (() => {
    contentHeader.textContent = "Welcome!";
    par1.textContent = 'Our pizzeria has been awarded the title of "Best Pizzeria in Asgard" by NineRealmsAdvisors for more than 2000 years. We pride ourselves with being the best among asgardians, providing excellent food quality and customer care since Yggdrasil was just a small bush.';
    par2.textContent = 'Located in the center of our great capital, out restaurants provide the best scenery, for Gods and mortals alike!';
    par3.textContent = 'Tired of the stressful living of the Lands Between? Come join us here in Asgard and taste the best pizza you will ever eat -- truly divine!';
    
})();

