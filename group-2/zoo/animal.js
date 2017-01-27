function Animal(name, kind, isCarnivore) {
    this.name = name;
    this.kind = kind;
    this.isCarnivore = isCarnivore;

    this.type = "meat";
}

Animal.prototype.getFoodType = function () {
    return this.isCarnivore ? "meat" : "grass";
}

Animal.prototype.eat = function (food) {
    if (this.getFoodType() !== food.type) {
        throw Error(`${this.name} cannot eat ${food.name}`)
    }
    return `${this.name} is eating ${food.name}`;
}


// Animal.prototype.eat = function (food) {
//     if (this.isCarnivore) {
//         if (food.type !== "meat") {
//             throw Error(`${this.name} cannot eat ${food.name}`)
//         }
//         return `${this.name} is eating ${food.name}`;
//     }

//     if (food.type !== "grass") {
//         throw Error(`${this.name} cannot eat ${food.name}`)
//     }
//     return `${this.name} is eating ${food.name}`;
// }

Animal.prototype.makeSound = function () {
    throw Error("don't know how to make sounds");
}

let returnThree = (function () {
    let x = 3;

    return function () {
        return x;
    }
})()