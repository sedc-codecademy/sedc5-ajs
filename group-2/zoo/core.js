let animals = [];

let bunny = new Animal("Bunny", "rabbit", false);
console.log(JSON.stringify(bunny));
let wolf = new Animal("WhiteFang", "wolf", true);
console.log(JSON.stringify(wolf));

let salad = {
    name: "salad",
    type: "grass"
}

let venison = {
    name: "venison",
    type: "meat"
}


console.log(bunny.eat(salad)); //expected: Bunny is eating salad
//console.log(bunny.eat(venison)); //expected: ERROR: Bunny cannot eat venison

//wolf.eat(salad); //expected: ERROR: Wolf cannot eat salad
console.log(wolf.eat(venison)); //expected: Wolf is eating venison
console.log(wolf.eat(bunny)); //expected: Wolf is eating bunny

//Exercise left to the reader :)
console.log(wolf.eat(wolf)); //expected: ERROR: Wolf cannot eat itself