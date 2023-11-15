const { describe } = require("node:test");
const {circle, square, triangle} = require("./shapes")

//Circle Shape
describe('circle', () => {
    test('renders correctly', () => {
        const shapes = new circle();
        var color =('green')
        shapes.setColor(color);
        expect(shapes.render()).toEqual(`<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${color}"/>`)

    });
});
//Square Shape
describe('square', () => {
    test('renders correctly', () => {
        const shapes = new square();
        var color =('orange')
        shapes.setColor(color);
        expect(shapes.render()).toEqual(`<rect x="50" height="200" width="200" fill="${color}"/>`)
    });
});

//Triangle Shape
describe('triangle', () => {
    test('renders correctly', () => {
        const shapes = new triangle();
        var color =('blue')
        shapes.setColor(color);
        expect(shapes.render()).toEqual(`<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${color}"/>`)
    });
});

