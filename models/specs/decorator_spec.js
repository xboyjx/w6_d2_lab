const assert = require('assert');
const Decorator = require('../decorator.js');
const Paint = require('../paint.js')
const Room = require('../room.js')

describe('Decorator', function(){
    let decorator;
    let paint1;
    let room1;

    beforeEach(function(){
        decorator = new Decorator();
        paint1 = new Paint(5)
        room1 = new Room(10)
    });


    it('should have an empty paint stock', function(){
        const actual = decorator.paintStock;
        assert.deepEqual(actual, []);
    });

    it('should be able to add a can of paint to paintStock', function(){
        decorator.addPaintToStock(paint1)
        actual = decorator.paintStock.length;
        assert.strictEqual(actual, 1)
    })

    it('should be able to calculate total liters of paint in stock', function(){
        decorator.addPaintToStock(paint1)
        decorator.addPaintToStock(paint1)
        actual = decorator.calculateTotalLitres()
        assert.strictEqual(actual, 10)
    })

    it('should be able to calculate if it has enough paint to paint a room', function(){
        decorator.addPaintToStock(paint1)
        decorator.addPaintToStock(paint1)
        const actual = decorator.checkPaintForRoom(room1)
        assert.strictEqual(actual, true)
    })

    it('should be able to paint room if there is enough paint in stock', function(){
        decorator.addPaintToStock(paint1)
        decorator.addPaintToStock(paint1)
        decorator.paintRoom(room1)
        actual = room1.painted
        assert.strictEqual(actual, true)
    })
});