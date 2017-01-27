function Monkey(name, monkeyKind, canClimb, call){
    Animal.call(this, name, "monkey", false);

    this.canClimb = canClimb;
    this.call = function(){
        return call;
    };
}

Monkey.prototype = new Animal();

Monkey.prototype.climb = function(tree){
    if (!this.canClimb)
        throw Error(`${this.name} cannot climb trees`)
    return `${this.name} climbed a tree`;
}

Monkey.prototype.makeSound = function(){
    return `Making sound: ${this.call()}`;
}

