import { Circle, Triangle, Square } from './shapes.js';

describe('Shape classes', () => {
  test('Circle renders correctly', () => {
    const circle = new Circle('#000000');
    expect(circle.render()).toBe('<circle cx="150" cy="100" r="80" fill="#000000" />');
  });

  test('Triangle renders correctly', () => {
    const triangle = new Triangle('#000000');
    expect(triangle.render()).toBe('<polygon points="150,10 290,190 10,190" fill="#000000" />');
  });

  test('Square renders correctly', () => {
    const square = new Square('#000000');
    expect(square.render()).toBe('<rect x="50" y="50" width="200" height="200" fill="#000000" />');
  });
});