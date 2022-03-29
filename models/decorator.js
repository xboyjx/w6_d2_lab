

const Decorator = function(){
    this.paintStock = []
};

Decorator.prototype.addPaintToStock = function(paint){
    this.paintStock.push(paint);
};

Decorator.prototype.calculateTotalLitres = function(){
    let total = 0
    for(let paint of this.paintStock){
        total += paint.litres
    }
    return total
}

Decorator.prototype.checkPaintForRoom = function(room){
    return this.calculateTotalLitres() >= room.area
}

Decorator.prototype.paintRoom = function(room){
    if(this.checkPaintForRoom(room)){
        room.paint()
    }

}

module.exports = Decorator;