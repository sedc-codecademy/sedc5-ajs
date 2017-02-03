/// <reference path="../../typings/globals/jquery/index.d.ts" />
$(function () {
    $("#result").text(6);
    $("#sayHi").on("click", function () {
        var result = getGreeting("Weko");
        $("#result").text(result.greeting);
    });
});
function getGreeting(name) {
    return { greeting: "Hi, " + name };
}
// $(function () {
//     $("#result").text(6);
//     $("#sayHi").on("click", function () {
//         let result = getGreeting("Weko");
//         $("#result").text(result);
//     });
// });
// function getGreeting(name) {
//     return ("Hi, " + name);
// }
