import classnames from 'classnames/dedupe';

import iconAttributes from './icon-attributes.json';

class Icon {
    constructor(name, contents, tags = []) {
        this.name = name;
        this.contents = contents;
        this.tags = tags;
        this.attrs = {
            ...iconAttributes,
            ...{ class: `matericons matericons-${name}` },
        };
    }

    // Create an SVG string
    iconToSVG(attrs = {}) {
        const combinedAttrs = {
            ...this.attrs,
            ...attrs,
            ...{ class: classnames(this.attrs.class, attrs.class) },
        };

        return `<svg ${attrsToString(combinedAttrs)}>${this.contents}</svg>`;
    }

    // Return string representation of an `Icon`
    toString() {
        return this.contents;
    }
}

// Convert attributes object to string of HTML attributes
function attrsToString(attrs) {
    return Object.keys(attrs).map(key => `${key}="${attrs[key]}"`).join(' ');
}

export default Icon;
