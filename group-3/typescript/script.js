$(function () {
    $("#result").text(6);
    $("#sayHi").on("click", function () {
        var result = getGreeting("Weko");
        $("#result").text(result.greeting);
    });
    var array = [1, 2, 3, 5, 10, 15];
    var _loop_1 = function (index) {
        var element = array[index];
        var button = document.createElement("button");
        button.innerText = "Button #" + element;
        button.addEventListener("click", function () {
            console.log("Button #" + element + " clicked");
        });
        $("#result").append(button);
    };
    for (var index = 0; index < array.length; index++) {
        _loop_1(index);
    }
    var a = array[0], c = array[2], d = array.slice(3);
});
function getGreeting(name) {
    return { greeting: "Hi, " + name };
}
// let empty = getGreeting();
// let two = getGreeting("Weko", "Stefanovski");
var str = getGreeting("weko");
// let num = getGreeting(7)
// let obj = getGreeting({})
// let arr = getGreeting([])
