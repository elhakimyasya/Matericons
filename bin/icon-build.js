import fs from 'fs';
import path from 'path';
import icons from '../src/icons';

const outputDirectory = path.resolve(__dirname, '../dist/icons');

console.log(`Processing and Building SVG in ${outputDirectory}...`);

Object.keys(icons).forEach(name => {
    const svg = icons[name].iconToSVG();

    fs.writeFileSync(path.join(outputDirectory, `${name}.svg`), svg);
});
