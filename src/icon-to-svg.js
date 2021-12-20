import icons from './icons';

// Create an SVG string
function iconToSVG(name, attrs = {}) {
    console.warn('matericons.iconToSVG() is deprecated. Please use matericons.icons[name].iconToSVG() instead.');

    if (!name) {
        throw new Error('The required `key` (icon name) parameter is missing.');
    }

    if (!icons[name]) {
        throw new Error(`No icon matching '${name}'.`);
    }

    return icons[name].iconToSVG(attrs);
}

export default iconToSVG;
