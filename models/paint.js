const Paint = function(litres){
    this.litres = litres;
}

Paint.prototype.checkIfEmpty = function(){
    return this.litres === 0;
}

Paint.prototype.emptyAll = function(){
    this.litres = 0;
}

module.exports = Paint;