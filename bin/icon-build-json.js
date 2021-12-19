import fs from 'fs';
import path from 'path';

import iconBuildObject from './icon-build-object';

const iconDirectory = path.resolve(__dirname, '../icons');
const jsonOutput = path.resolve(__dirname, '../dist/icons.json');

console.log(`Processing JSON files in ${jsonOutput}...`);

const svgFiles = fs.readdirSync(iconDirectory).filter(file => path.extname(file) === '.svg');

const getSvg = svgFile => fs.readFileSync(path.join(iconDirectory, svgFile));

const icons = iconBuildObject(svgFiles, getSvg);

fs.writeFileSync(jsonOutput, JSON.stringify(icons));