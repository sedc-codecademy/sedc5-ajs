let bunny = new Animal("Bunny", "rabbit", false);
console.log(JSON.stringify(bunny));
let wolf = new Animal("WhiteFang", "wolf", true, function () { return `${this.name} is howling at the moon` });
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
try {
    console.log(bunny.eat(venison));
} catch (error) {
    console.log(`ERROR: ${error.message}`); //expected: ERROR: Bunny cannot eat venison
}

try {
    wolf.eat(salad);
} catch (error) {
    console.log(`ERROR: ${error.message}`); //expected: ERROR: Wolf cannot eat salad
}
console.log(wolf.eat(venison)); //expected: Wolf is eating venison
console.log(wolf.eat(bunny)); //expected: Wolf is eating bunny

//Exercise left to the reader :)
console.log(wolf.eat(wolf)); //expected: ERROR: Wolf cannot eat itself

console.log(wolf.makeSound());
console.log(bunny.makeSound());

console.log("-------------------")

let capucin = new Monkey("Nescaffe", "capucin", true, "eeeeeeeeeeeeeeeeeeeeee");
let gorilla = new Monkey("Kalla", "gorilla", true, "U-U-A-A");
let weko = new Monkey("Wekoslav", "human", false, "blah-blah-blah");

//let tree = {};

// capucin.climb(tree);
// gorilla.climb(tree);
// capucin.makeSound(); // Expected: eeeeeeeeeeeeeeeeeeeeee
// gorilla.makeSound(); // Expected: U-U-A-A
// weko.climb(tree); // should throw error
// weko.makeSound(); //Expected: blah-blah-blah
console.log(capucin.eat(salad));
console.log(gorilla.eat(salad));
console.log(weko.eat(salad));
