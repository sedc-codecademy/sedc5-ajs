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

function sayHello(greeting, person){
    let result = document.getElementById("result");
    let date = new Date();
    date = `${date.getSeconds()}:${date.getMilliseconds()}`;
    result.innerHTML += `${greeting}, ${person}! (${date})<br/>`;
}

setTimeout(function() {
    sayHello(greetings[0].greeting, greetings[0].person);
    setTimeout(function() {
        sayHello(greetings[2].greeting, greetings[2].person);
        setTimeout(function() {
            sayHello(greetings[1].greeting, greetings[1].person);
        }, 1000);
        sayHello(greetings[2].greeting, greetings[2].person);
    }, 4000);
    sayHello(greetings[0].greeting, greetings[0].person);
}, 2000);

sayHello(greetings[1].greeting, greetings[1].person);
