import fs from 'fs';
import path from 'path';
import icons from '../dist/icons.json';
import iconBuildSVGSpriteString from './icon-build-svg-sprite-string';

const outputFile = path.resolve(__dirname, '../dist/matericons-svg-sprite.svg');

console.log(`Processing SVG Sprites file in ${outputFile}...`);

fs.writeFileSync(outputFile, iconBuildSVGSpriteString(icons));