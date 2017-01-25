let button = document.getElementById("btn");
let display = document.getElementById("display");

var calculate = function (secondData) {
    let sum = 0;
    let array = secondData.data;   
    for(let i=0; i<array.length; i++){
        if(secondData.operation == "sine") {
            sum +=  Math.sin(array[i]);
        } else if(secondData.operation == "cosine") {
            sum += Math.cos(array[i]);
        } else if(secondData.operation == "log") {
            sum += Math.log(array[i]);
        } else if(secondData.operation == "square") {
            sum += Math.pow(array[i], 2);
        } else if(secondData.operation == "cube") {
            sum += Math.pow(array[i], 3);
        }  
    }
    display.innerHTML = `The operation "${secondData.operation}" applied to the array ${array} gives a result of ${sum}`;
}

button.addEventListener("click", function(){
    let baseRequest = new XMLHttpRequest();
    let baseURL = "https://raw.githubusercontent.com/sedc-codecademy/sedc5-ajs/master/homework-tasks/task-1/";
    baseRequest.open('GET', baseURL + "filelist.json", true);
    baseRequest.send(null);
    baseRequest.onreadystatechange = function() {
        if (baseRequest.readyState == XMLHttpRequest.DONE) {
            let data = JSON.parse(baseRequest.responseText);
            let random = data[Math.floor(Math.random() * data.length)];
            let secondRequest = new XMLHttpRequest();
            secondRequest.open('GET', baseURL + random, true);
            secondRequest.send(null);
            secondRequest.onreadystatechange = function() {
                if (secondRequest.readyState == XMLHttpRequest.DONE) {
                    let secondData = JSON.parse(secondRequest.response);
                    calculate(secondData);
                }
            }
        }
    }
});
