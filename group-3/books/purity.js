let name = "Weko";
let greeting;

function sayHi(){
    greeting = `Hi, ${name}`;
    console.log(greeting);
}

for (var index = 0; index < 7; index++) {
    greeting = sayHiPure("Weko");
    console.log(greeting);
}

function sayHiPure(name){
    let greeting = `Hi, ${name}`;
    return greeting;
}

let count = 0;

let fibResult = {
    "1": 1,
    "2": 1,
}

function fibonacci(number) {
    count++;
    if (fibResult[number])
        return fibResult[number];

    let result = fibonacci(number - 1) + fibonacci(number - 2);
    fibResult[number] = result;
    return result;
}

document.getElementById("result").innerHTML += fibonacci(45);