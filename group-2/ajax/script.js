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
        console.log(index);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let result = JSON.parse(xhr.response);

            for (let index = 0; index < result.length; index++) {
                let element = result[index];
                setTimeout(function () {
                    sayHello(element);
                }, 1000 * index);
            }
            
        }
    }
})