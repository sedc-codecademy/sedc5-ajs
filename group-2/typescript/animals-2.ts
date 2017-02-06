interface IAnimal {
    kind: string;
    name: string;
}

function speak(animal : IAnimal){
    return `My name is ${animal.name} and I'm a ${animal.kind}`;
}

let weko : IAnimal = {
    name: "Wekoslav",
    kind: "javascript"
};

let snoopy = {
    kind: "dog",
    name: "snoopy",
    owner: weko
};

let fluffy = {
    name: "fluffy",
    kind: "cat",
    fur: "calico"
};

console.log(speak(snoopy));
console.log(speak(weko));
console.log(speak(fluffy));
console.log(fluffy.fur);



