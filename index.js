import { generateLogo } from './lib/logomatic.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Dynamically import 'inquirer' using import()
const inquirer = await import('inquirer');

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const questions = [
{
    type: 'input',
    name: 'text',
    message: 'Enter up to three characters:',
    validate: (input) => input.length <= 3 || 'Please enter up to three characters',
},
{
    type: 'input',
    name: 'textColor',
    message: 'Enter the text color (keyword or hexadecimal):',
    validate: (input) => /^#?[0-9A-Fa-f]{6}$|^[a-zA-Z]+$/.test(input) || 'Please enter a valid color',
},
{
    type: 'list',
    name: 'shape',
    message: 'Choose a shape:',
    choices: ['circle', 'triangle', 'square'],
},
{
    type: 'input',
    name: 'shapeColor',
    message: 'Enter the shape color (keyword or hexadecimal):',
    validate: (input) => /^#?[0-9A-Fa-f]{6}$|^[a-zA-Z]+$/.test(input) || 'Please enter a valid color',
},
];

inquirer.default.prompt(questions).then((answers) => {
const { text, textColor, shape, shapeColor } = answers;

const svgContent = generateLogo(text, textColor, shape, shapeColor);

const outputPath = path.join(__dirname, 'examples', 'logo.svg');
fs.writeFileSync(outputPath, svgContent);
console.log('Generated logo.svg in examples/ directory');
});