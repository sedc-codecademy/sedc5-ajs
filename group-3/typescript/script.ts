$(function () {
    $("#result").text(6);

    $("#sayHi").on("click", () => {
        let result = getGreeting("Weko");
        $("#result").text(result.greeting);
    })

    let array = [1, 2, 3, 5, 10, 15];
    for (let index = 0; index < array.length; index++) {
        let element = array[index];
        let button = document.createElement("button");
        button.innerText = `Button #${element}`;
        button.addEventListener("click", () => {
            console.log(`Button #${element} clicked`);
        });
        $("#result").append(button);
    }

    let [a, , c, ...d] = array;
})

function getGreeting(name: string) {
    return { greeting: `Hi, ${name}` };
}

// let empty = getGreeting();
// let two = getGreeting("Weko", "Stefanovski");
let str = getGreeting("weko")
// let num = getGreeting(7)
// let obj = getGreeting({})
// let arr = getGreeting([])



