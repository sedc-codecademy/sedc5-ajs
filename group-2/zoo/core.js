let animals = [
    new Animal("Whitefang", "wolf", true)
];



$(() => {
    $("#add-animal").on('click', () => {
        let value = $("#type").val();
        let animal = options[value].constructor();
        animals.push(animal);
        displayAnimals();
    })

    $("#type").on("change", () => {
        let value = $("#type").val();
        $("#animal-edit").fadeOut();
        $("#monkey-edit").fadeOut();
        $(`#${options[value].editorId}`).fadeIn();
    })

    $("#monkey-edit").fadeOut();
    displayAnimals();
})

displayAnimals = () => {
    let list = $("#animal-list");
    list.html("");
    animals.forEach(a => {
        list.append(`<tr>
                    <td>${a.name}</td>
                    <td>${a.kind}</td>
                    <td>${a.isCarnivore ? "Carnivore" : "Herbivore"}</td>
                    <td><button>Speak</button></td>
                </tr>`);
        let button = $(list.find("button").last());
        button.on('click', () => {
            $("#result").text(a.makeSound());
        });
    });
}

let createAnimal = () => {
    let name = $("#name").val();
    let kind = $("#kind").val();
    let isCarnivore = $("#isCarnivore").is(":checked");

    let makeSound = () => `Making ${kind} sounds`;

    let animal = new Animal(name, kind, isCarnivore, makeSound);
    return animal;
}

let createMonkey = () => {
    let name = $("#name").val();
    let mkind = $("#mkind").val();
    let canClimb = $("#canClimb").is(":checked");
    let call = $("#monkeyCall").val();

    let monkey = new Monkey(name, mkind, canClimb, call);
    return monkey;
}

let options = {
    "animal": {
        constructor: createAnimal,
        editorId: "animal-edit"
    },
    "monkey": {
        constructor: createMonkey,
        editorId: "monkey-edit"
    },
    "weeee" :{
        editorId: "weeee-edit",
        constructor: () => {
            return {
                name: "I make weeeee",
                makeSound: () => `weeeeeeeeeeeee`
            }
        }
    }
};


