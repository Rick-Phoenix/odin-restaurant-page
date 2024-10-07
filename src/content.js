import odinLogo from "./Images/Odin-logo.png";
import homeone from "./Images/rest-1.jpg";
import hometwo from "./Images/rest-2.2.jpg";
import homethree from "./Images/rest-3.jpg";
import loki from "./Images/loki.jpg";
import thor from "./Images/thor.jpg";
import freya from "./Images/freya.jpg";
import asgard1 from "./Images/asgard1.jpg";
import asgard2 from "./Images/asgard2.jpg";
import asgard3 from "./Images/asgard3.jpg";
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
const img1 = createImage(homeone, 'parimg');
const img2 = createImage(hometwo, 'parimg');
const img3 = createImage(homethree, 'parimg');


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
    contentDesc.append(img1, par1, img2, par2, img3, par3);
})();

export const renderPageHome = () => {
    contentHeader.textContent = "Welcome!";
    par1.textContent = 'Our pizzeria has been awarded the title of "Best Pizzeria in Asgard" by NineRealmsAdvisors for more than 2000 years. We pride ourselves with being the best among asgardians, providing excellent food quality and customer care since Yggdrasil was just a small bush.';
    par2.textContent = 'Located in the center of our great capital, out restaurants provide the best scenery, for Gods and mortals alike!';
    par3.textContent = 'Tired of the stressful living of the Lands Between? Come join us here in Asgard and taste the best pizza you will ever eat -- truly divine!';
    img1.src = homeone;
    img2.src = hometwo;
    img3.src = homethree;
};

export const renderPageMenu = () => {
    contentHeader.textContent = "Our delicious Pizzas!";
    par1.innerHTML = "<h5>Thor's special</h5> <ul>Ingredients: <li>Tomato sauce</li> <li>Cheese</li> <li>Mead-infused pepperoni</li> <li>Electric eel</li></ul>";
    par2.innerHTML = "<h5>Freya's special</h5> <ul>Ingredients: <li>Tomato sauce</li> <li>Cheese</li> <li>Fresh, magically produced vegetables from Vanaheim farms</li> <li>A special blessing from the Goddess herself</li></ul>";
    par3.innerHTML = "<h5>Loki's special</h5> <ul>Ingredients: <li>Magically produced on the spot by the God of Mischief himself</li> <li>May or may not include mistletoe</li></ul>";
    img1.src = thor;
    img2.src = freya;
    img3.src = loki;
};

export const renderPageAbout = () => {
    contentHeader.textContent = "Visit Asgard";
    par1.textContent = "When you come to Pizzeria da Odino, you don't just come to eat delicious pizzas, made with the best, most genuine ingredients in all the Nine Realms. You come here for the full Asgardian experience!";
    par2.textContent = "Experience the silence and peacefulness of the Asgardian mountains by renting a cabin from one of our selected partners. Pizza delivery to your cabin is free of charge!";
    par3.textContent = "Come on, what are you waiting for?! Come here to Asgard and take a bite of our gorgeous scenery, vibrant culture and delicious pizzas!";
    img1.src = asgard1;
    img2.src = asgard2;
    img3.src = asgard3;
};