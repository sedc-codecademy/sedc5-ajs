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
