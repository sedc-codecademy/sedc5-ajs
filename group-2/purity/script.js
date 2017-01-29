let name = "Wekoslav";
let greeting = "";

function sayHi() {
    console.log(`executing`);
    greeting = `Hi, ${name}`
    console.log(greeting);
}

let result;
for (var index = 0; index < 10; index++) {
    result = pureHi(name);
}

function pureHi(name) {
    let greeting = `Hi, ${name}`
    return greeting;
}

function add(x, y) {
    return x + y;
}

let count = 0;

let fibresult = {
    "1": 1,
    "2": 1
};

function fibbonaci(number){
    count++;
    if (fibresult[number])
        return fibresult[number];

    let result = fibbonaci(number-1) + fibbonaci(number-2);
    fibresult[number] = result;
    return result;
}