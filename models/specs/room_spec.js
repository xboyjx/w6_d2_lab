const assert = require ('assert');
const Room = require ('../room.js');

describe('Room', function(){
let room;

    beforeEach(function(){
        room = new Room(12);
    });
    
    it("should have a area", function(){
        const actual = room.area;
        assert.strictEqual(actual, 12);
    });

    it('should not be painted', function(){
        const actual = room.painted;
        assert.strictEqual(actual, false);
    });

    it('can be painted', function(){
        room.paint();
        actual = room.painted;
        assert.strictEqual(actual, true);
    });
});