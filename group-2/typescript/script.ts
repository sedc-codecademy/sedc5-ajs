/// <reference path="../../typings/globals/jquery/index.d.ts" />

$(function(){
    $("#result").text(6);

    $("#sayHi").on("click", () =>{
        let result = getGreeting("Weko");
        $("#result").text(result.greeting);
    })
})

function getGreeting(name : string){
    return  { greeting : "Hi, " + name};
}

// let empty = getGreeting();
// let two = getGreeting("Weko", "Stefanovski");
let str = getGreeting("weko")
// let num = getGreeting(7)
// let obj = getGreeting({})
// let arr = getGreeting([])

