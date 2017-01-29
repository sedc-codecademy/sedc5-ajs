function sayHello(greeting) {
    let result = document.getElementById("result");
    let date = new Date();
    date = `${date.getSeconds()}:${date.getMilliseconds()}`;
    result.innerHTML += `${greeting.greeting}, ${greeting.person}! (${date})<br/>`;
}

document.getElementById("show").addEventListener('click', function (event) {
    console.log(event);
    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'data.json', true);
    xhr.send(null);

    xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let result = JSON.parse(xhr.response);
            for (var index = 0; index < result.length; index++) {

                (function (index) {
                    var element = result[index];
                    setTimeout(function () {
                        sayHello(element);
                    }, i * 500);
                })(index);
            }
        }
    }
});

