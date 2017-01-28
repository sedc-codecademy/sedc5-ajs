let greetings = [
    {
        greeting: "Hi",
        person: "mom"
    },
    {
        greeting: "Hello",
        person: "dad"
    },
    {
        greeting: "How do you do",
        person: "officer"
    }
]

function sayHello(greeting) {
    let result = document.getElementById("result");
    let date = new Date();
    date = `${date.getSeconds()}:${date.getMilliseconds()}`;
    result.innerHTML += `${greeting.greeting}, ${greeting.person}! (${date})<br/>`;
}

let hiOfficer = function () {
    sayHello(greetings[1]);
};

setTimeout(function () {
    sayHello(greetings[0]);
    setTimeout(function () {
        setTimeout(hiOfficer, 3000);
        sayHello(greetings[2]);
    }, 4000);
}, 2000);

// sayHello(greetings[1]);

// setTimeout(function () {
//     sayHello(greetings[2]);
// }, 4000);


