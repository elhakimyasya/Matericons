/* eslint-env browser */
import classnames from 'classnames/dedupe';

import icons from './icons';

// Replace all HTML elements that have a `data-matericons` attribute with SVG markup corresponding to the element's `data-matericons` attribute value.
function replace(attrs = {}) {
    if (typeof document === 'undefined') {
        throw new Error('`matericons.replace()` only works in a browser environment.');
    }

    const elementsToReplace = document.querySelectorAll('[data-matericons]');

    Array.from(elementsToReplace).forEach(element =>
        replaceElement(element, attrs),
    );
}

// Replace a single HTML element with SVG markup corresponding to the element's `data-matericon` attribute value.
function replaceElement(element, attrs = {}) {
    const elementAttrs = getAttrs(element);
    const name = elementAttrs['data-matericons'];
    delete elementAttrs['data-matericons'];

    const svgString = icons[name].iconToSVG({
        ...attrs, ...elementAttrs, ...{
            class: classnames(attrs.class, elementAttrs.class)
        }
    });
    const svgDocument = new DOMParser().parseFromString(
        svgString, 'image/svg+xml',
    );
    const svgElement = svgDocument.querySelector('svg');

    element.parentNode.replaceChild(svgElement, element);
}

// Get the attributes of an HTML element
function getAttrs(element) {
    return Array.from(element.attributes).reduce((attrs, attr) => {
        attrs[attr.name] = attr.value;
        return attrs;
    }, {});
}

export default replace;
