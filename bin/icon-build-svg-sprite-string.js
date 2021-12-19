import DEFAULT_ATTRS from '../src/icon-attributes.json';

// Build an SVG sprite string containing SVG symbols
function iconBuildSVGSpriteString(icons) {
    const symbols = Object.keys(icons).map(icon => toSvgSymbol(icon, icons[icon])).join('');

    return `<svg xmlns="${DEFAULT_ATTRS.xmlns}"><defs>${symbols}</defs></svg>`;
}

// Create an SVG symbol string
function toSvgSymbol(name, contents) {
    return `<symbol id="${name}" viewBox="${DEFAULT_ATTRS.viewBox}">${contents}</symbol>`;
}

export default iconBuildSVGSpriteString;
