import { Circle, Triangle, Square } from './shapes.js';

function generateLogo(text, textColor, shapeType, shapeColor) {
let shape;
switch (shapeType) {
    case 'circle':
    shape = new Circle(shapeColor);
    break;
    case 'triangle':
    shape = new Triangle(shapeColor);
    break;
    case 'square':
    shape = new Square(shapeColor);
    break;
    default:
    throw new Error('Unknown shape type');
}

return `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shape.render()}
    <text x="150" y="125" font-size="60" fill="${textColor}" text-anchor="middle" alignment-baseline="middle">${text}</text>
    </svg>
`;
}

export { generateLogo };