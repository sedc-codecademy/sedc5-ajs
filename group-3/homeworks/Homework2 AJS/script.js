let calculate = function(array, operator) {
    let sum = 0;

    for (var i = 0; i < array.length; i++) {

        let oneCalc=0;

        switch (operator) {
            case "sine":
                oneCalc = Math.sin(array[i]);
                break;
            case "cosine":
                oneCalc = Math.cos(array[i]);
                break;
            case "log":
                oneCalc = Math.log(array[i]);
                break;
            case "square":
                oneCalc = Math.pow(array[i], 2);
                break;
            case "cube":
                oneCalc = Math.pow(array[i], 3);
                break;
        }

        // console.log(array[i]);
        // console.log(oneCalc);
        sum += oneCalc;
    }
    // console.log(sum);
    return sum;

}


let result = document.getElementById("result");

document.getElementById('show').addEventListener('click', function(event) {
    // console.log(event);
    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://raw.githubusercontent.com/sedc-codecademy/sedc5-ajs/master/homework-tasks/task-1/filelist.json', true);
    xhr.send(null);

    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {

            let arrList = JSON.parse(xhr.response);
            // console.log(arrList);

            let randName = arrList[Math.floor(Math.random() * arrList.length)];
            let randURL = 'https://raw.githubusercontent.com/sedc-codecademy/sedc5-ajs/master/homework-tasks/task-1/' + randName;
            // console.log(randURL); //needed random URL

            //second JSON file
            xhr = new XMLHttpRequest();
            xhr.open('GET', randURL, true);
            xhr.send(null);

            xhr.onreadystatechange = function() {
                if (xhr.readyState == XMLHttpRequest.DONE) {
                    // console.log(JSON);
                    let fileJSON = JSON.parse(xhr.response);
                    // console.log(fileJSON);
                    let data = fileJSON.data;
                    let operator = fileJSON.operation;

                    // console.log(data);
                    // console.log(operator);

                    let calculatedResult = calculate(data, operator);
                    result.innerHTML += `<br/>Data: ${data};<br/>Operator: ${operator} ;<br/>Result: ${calculatedResult}<br/>`;
                }
            }

        }
    }

});
