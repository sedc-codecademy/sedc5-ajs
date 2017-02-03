class Animal {
    constructor(public name: string, public kind: string) { }

    speak() {
        return `My name is ${this.name} and I'm a ${this.kind}`;
    }
}

class Dog extends Animal {
    constructor(name: string){
        super(name, "dog");
    }
}

class Cat extends Animal {
    constructor(name: string){
        super(name, "cat");
    }
}

let animals: Animal[] = [];

animals.push(new Dog("Rex"));
animals.push(new Cat("Fluffy"));
animals.push(new Animal("Alice", "chimp"));

console.log(animals.map(a => a.speak()));

let rex = new Dog("Rex");
