import Svgo from 'svgo';
import cheerio from 'cheerio';
import { format } from 'prettier';

import iconAttributes from '../src/icon-attributes.json';

// Process SVG string
function iconProcessSVG(svg) {
    return (iconOptimize(svg).then(setAttrs).then(format).then(svg => svg.replace(/;/g, '')));
}

// Optimize SVG with `svgo`
function iconOptimize(svg) {
    const svgo = new Svgo({
        plugins: [
            {
                convertShapeToPath: false
            },
            {
                mergePaths: false
            },
            {
                removeAttrs: {
                    attrs: '(fill|stroke.*)'
                }
            },
            {
                removeTitle: true
            },
        ]
    });

    return new Promise(resolve => {
        svgo.optimize(svg, ({ data }) => resolve(data));
    });
}

// Set default attibutes on SVG
function setAttrs(svg) {
    const $ = cheerio.load(svg);

    Object.keys(iconAttributes).forEach(key =>
        $('svg').attr(key, iconAttributes[key]),
    );

    return $('body').html();
}

export default iconProcessSVG;
