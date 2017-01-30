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

console.log(greetings);
// let getGreetings = greetings.map(function(g){
//     return function(name){
//         return `${g.greeting}, ${name}`;
//     }
// });

let getGreetings = greetings.map((g) => (name) => `${g.greeting}, ${name}`);

getGreetings.forEach(function(gf){
      console.log(gf("Weko"));
});

