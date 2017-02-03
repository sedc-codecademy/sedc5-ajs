//Task 1:

let button = document.getElementById("roll");
let result = document.getElementById("result");
let rollRandomNumber = (max) => Math.random() * (max + 1) | 0;

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



button.addEventListener("click", function () {

    loadJSON('filelist.json',
        function (fileList) {
            let randomFile = fileList[rollRandomNumber(19)];

            loadJSON(randomFile,
                function (randomFile) {
                    let sum = 0;

                    for (i = 0; i < randomFile.data.length; i++) {
                        switch (randomFile.operation) {
                            case "sine":
                                sum += Math.sin(randomFile.data[i]);
                                break;

                            case "cosine":
                                sum += Math.cos(randomFile.data[i]);
                                break;

                            case "log":
                                sum += Math.log(randomFile.data[i]);
                                break;

                            case "square":
                                sum += Math.pow(randomFile.data[i], 2);
                                break;

                            case "cube":
                                sum += Math.pow(randomFile.data[i], 3);
                                break;

                            default:
                                return "There have been an error";
                        }

                    }
                    result.innerHTML += `The operation ${randomFile.operation} applied to the array ${randomFile.data} gives a result of ${sum.toFixed(2)}</br>`;
                },
                function (xhr) { console.error(xhr); }
            );

        },
        function (xhr) { console.error(xhr); }
    );

});





