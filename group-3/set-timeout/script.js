function sayHello(greeting, person) {
    let result = document.getElementById("result");
    let date = new Date();
    date = `${date.getSeconds()}:${date.getMilliseconds()}`;
    result.innerHTML += `${greeting}, ${person}! (${date})<br/>`;
}

let importantValue = 100;

setTimeout(function () {
    if (importantValue === 100)
        sayHello("Hi", "Weko - 1");
    else
        sayHello("I hate you", "Weko");
    importantValue = 99;
}, 0);

importantValue = 20;
sayHello("Hi", "Weko - 2");

setTimeout(function () {
    sayHello("Hi", "Weko - 3");
}, 2000);

// function fibonacci(number) {
//     if ((number === 1) || (number === 2))
//         return 1;
//     return fibonacci(number - 1) + fibonacci(number - 2);
// }

// document.getElementById("result").innerHTML += fibonacci(45);