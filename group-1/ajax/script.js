let button = document.getElementById("show");
var sayHello = function (greeting) {
    let result = document.getElementById("result");
    result.innerHTML += `${greeting.greeting}, <b>${greeting.person}</b><br/>`;
}

button.addEventListener("click", function () {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'data.json', true);
    xhr.send(null);

    xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let greetings = JSON.parse(xhr.response);

            // for (let index = 0; index < greetings.length; index++) {
            //     let greeting = greetings[index];
            //     setTimeout(function () {
            //         sayHello(greeting)
            //     }, index * 1000);
            // }
            for (var index = 0; index < greetings.length; index++) {
                (function () {
                    var greeting = greetings[index];
                    setTimeout(function () {
                        sayHello(greeting)
                    }, index * 1000);
                })();
            }
        }
    }
})

(function () {
    var x = 1;
    var y = 2;
    console.log(x + y);
})();

