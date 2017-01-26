let name = "Wekoslav";
let greeting;

function sayHi() {
    greeting = `Hi, ${name}`;
    console.log(greeting);
}

for (var index = 0; index < 5; index++) {
    let result = sayPureHi(name);
    //console.log(result);
}

function sayPureHi(name) {
    let greeting = `Hi, ${name}`;
    return greeting;
}

let count = 0;

let fibresult = {
    "1" : 1,
    "2" : 1
};

function fibbonaci(number) {
    count++;
    if (fibresult[number])
        return fibresult[number];

    let result = fibbonaci(number - 1) + fibbonaci(number - 2);
    fibresult[number]=result;
    return result;
}