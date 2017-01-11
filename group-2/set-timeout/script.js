function sayHello(greeting, person){
    let result = document.getElementById("result");
    let date = new Date();
    date = `${date.getSeconds()}:${date.getMilliseconds()}`;
    result.innerHTML += `${greeting}, ${person}! (${date})<br/>`;
}

setInterval(function() {
    sayHello("Здраво", "Векослав");    
}, 2000);

sayHello("Hi", "Weko");

for (var index = 0; index < 1000000; index++) {
    for (var index2 = 0; index2 < 1000; index2++) {
    }
}
sayHello("Hi", "Done");







