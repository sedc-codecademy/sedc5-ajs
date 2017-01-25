let btn = document.getElementById("button__choose_random");
let display = document.getElementById("div__display");
function randomJson(array){ // function that finds a random element from array
    random = Math.floor(Math.random() * array.length);
    return array[random];
}

btn.addEventListener("click", function () {
    function doOperation(operation, data) {
        let sum = 0;
        for(let i = 0; i < data.length; i++){
            if (operation == "pow2"){
                sum += Math.pow(data[i], 2);
            } else if (operation == "pow3"){
                sum += Math.pow(data[i], 3);
            } else if (operation == "log"){
                sum += Math.log(data[i]);
            } else if (operation == "cos"){
                sum += Math.cos(data[i]);
            } else if (operation == "sin"){
                sum += Math.sin(data[i]);
            } else {
                alert("Your code sucks 1!");
            }
        }
        return sum;
    }
    let xhrList = new XMLHttpRequest();
    xhrList.open('GET', 'task-1/filelist.json', true);
    xhrList.send(null);
    xhrList.onreadystatechange = function () {
        if (xhrList.readyState == XMLHttpRequest.DONE) {
            let randomResponse = JSON.parse(xhrList.response);
            let xhrRandom = new XMLHttpRequest();
            let randListItem = randomJson(randomResponse);
            display.innerHTML += `Current JSON: </br> ${randListItem}<br/>`;
            xhrRandom.open('GET', 'task-1/' + randListItem, true);
            xhrRandom.send(null);
            xhrRandom.onreadystatechange = function () {
                if (xhrRandom.readyState == XMLHttpRequest.DONE) {
                    let finalResponse = JSON.parse(xhrRandom.response);
                    console.log(xhrRandom);
                    let operation = finalResponse.operation;
                    let data = finalResponse.data;
                    let finalAnswer = 0;
                    if (operation == "sine") {
                        finalAnswer = doOperation("sin", data);
                        display.innerHTML += `Numbers: </br> ${data} </br> Operation: </br> ${operation} </br> Result: </br> ${finalAnswer} </br> `;
                    } else if (operation == "cosine") {
                        finalAnswer = doOperation("cos", data);
                        display.innerHTML += `Numbers: </br> ${data} </br> Operation: </br> ${operation} </br> Result: </br> ${finalAnswer} </br> `;
                    } else if (operation == "log") {
                        finalAnswer = doOperation("log", data);
                        display.innerHTML += `Numbers: </br> ${data} </br> Operation: </br> ${operation} </br> Result: </br> ${finalAnswer} </br> `;
                    } else if (operation == "square") {
                        finalAnswer = doOperation("pow2", data);
                        display.innerHTML += `Numbers: </br> ${data} </br> Operation: </br> ${operation} </br> Result: </br> ${finalAnswer} </br> `;
                    } else if (operation == "cube") {
                        finalAnswer = doOperation("pow3", data);
                        display.innerHTML += `Numbers: </br> ${data} </br> Operation: </br> ${operation} </br> Result: </br> ${finalAnswer} </br> `;
                    } else {
                        alert("Your code sucks 2!");
                    }
                }
                }
            }
        }
    });