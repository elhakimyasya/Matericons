import fs from 'fs';
import path from 'path';

import iconProcessSVG from './icon-process-svg';

const iconDirectory = path.resolve(__dirname, '../icons');

console.log(`Processing SVGs files in ${iconDirectory}...`);

fs.readdirSync(iconDirectory).filter(file => path.extname(file) === '.svg').forEach(svgFile => {
    const svg = fs.readFileSync(path.join(iconDirectory, svgFile));
    iconProcessSVG(svg).then(svg =>
        fs.writeFileSync(path.join(iconDirectory, svgFile), svg),
    );
});
