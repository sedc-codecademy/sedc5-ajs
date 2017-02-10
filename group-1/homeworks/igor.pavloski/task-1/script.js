//Task 1:

let button = document.getElementById("roll");
let result = document.getElementById("result");
let rollRandomNumber = (max) => Math.random() * (max + 1) | 0;

//loading JSON file function -----------------------------------------
function loadJSON(path, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                if (success)
                    success(JSON.parse(xhr.responseText));
            } else {
                if (error)
                    error(xhr);
            }
        }
    };
    xhr.open("GET", path, true);
    xhr.send();
}

//getting the function for the entered operation---------------
function doOperation(operation) {
    switch (operation) {
        case "sine":
            return (data) => Math.sin(data);
            break;

        case "cosine":
            return (data) => Math.cos(data);
            break;

        case "log":
            return (data) => Math.log(data);
            break;

        case "square":
            return (data) => Math.pow(data, 2);
            break;

        case "cube":
            return (data) => Math.pow(data, 3);
            break;

        default:
            return "There have been an error";
    }
}

//main button's on click function--------------------------------------------
button.addEventListener("click", function () {

    loadJSON('filelist.json',
        function (fileList) {
            let randomFile = fileList[rollRandomNumber(19)];

            loadJSON(randomFile,
                function (randomFile) {
                    let operation = doOperation(randomFile.operation)
                    let data = randomFile.data;
                    let sum = 0;

                    data.forEach(function (element) {
                        sum += operation(element);
                    }, this);

                    result.innerHTML += `The operation ${randomFile.operation} applied to the array ${randomFile.data} gives a result of ${sum.toFixed(2)}</br>`;
                },
                function (xhr) { console.error(xhr); }
            );

        },
        function (xhr) { console.error(xhr); }
    );

});

