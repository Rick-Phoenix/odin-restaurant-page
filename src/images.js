import odinLogo from "./Images/Odin-logo.png";
import * as sel from './selectors.js';

function createImage(source, ...classes) {
    const img = document.createElement('img');
    img.src = source;
    img.classList.add(...classes);
    return img;
}

const logo = createImage(odinLogo, 'logo');

export default (() => {
    sel.header.insertBefore(logo, sel.nav);
})();

