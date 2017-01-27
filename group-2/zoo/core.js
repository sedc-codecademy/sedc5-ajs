let animals = [];

let salad = {
    name: "salad",
    type: "grass"
}

let venison = {
    name: "venison",
    type: "meat"
}

let bunny;
let wolf;

bunny.eat(salad); //expected: Bunny is eating salad
bunny.eat(venison); //expected: ERROR: Bunny cannot eat venison

wolf.eat(salad); //expected: ERROR: Wolf cannot eat salad
wolf.eat(venison); //expected: Wolf is eating venison