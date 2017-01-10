var sayHello = function(greeting, name){
    let result = document.getElementById("result");
    let date = new Date();
    date = `${date.getSeconds()}${date.getMilliseconds()}`;
    result.innerHTML += `${greeting} <b>${name}</b> (${date})<br/>`;
}

sayHello("Hi", "Weko");

setInterval(function(){
    sayHello("Здраво", "Векослав со тајмаут");
}, 1000);

sayHello("Здраво", "Векослав без тајмаут");

function loop(){
    while(true){

    }
}
setTimeout(function(){
    for(let i=0; i<1000000; i++){
        for(let j=0; j<1000; j++){
            
        }        
    }
}, 900);

