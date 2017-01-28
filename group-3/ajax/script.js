document.getElementById("show").addEventListener('click', function (event) {
    console.log(event);
    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'data.json', true);
    xhr.send(null);

    xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            console.log(xhr.response);
        }
    }
});