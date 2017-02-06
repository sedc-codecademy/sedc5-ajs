let animals = [
    {
        name: "Rex",
        type: "dog",
        kind: "shepperd"
    },
    {
        name: "Fluffy",
        type: "cat",
        kind: "calico"
    },
    {
        name: "Swimmy",
        type: "goldfish",
        age: 12
    }
];

interface IAnimal {
    name: string;
    type: string;
    kind?: string;
}

function showAnimal(animal : IAnimal){
    return `${animal.name} is a ${animal.type} of the ${animal.kind} kind`;
}

console.log(animals.map(a => showAnimal(a)));

enum WorldSide {
    South, 
    North,
    East,
    West
}

let direction : WorldSide = WorldSide.North;
