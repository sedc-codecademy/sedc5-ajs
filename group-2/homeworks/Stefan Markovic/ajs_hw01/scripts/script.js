let btn = document.getElementById("btn");
let div = document.getElementById("div");
btn.addEventListener("click", function () {





    let ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'https://raw.githubusercontent.com/sedc-codecademy/sedc5-ajs/master/homework-tasks/task-1/filelist.json', true);
    ourRequest.onload = function () {
        let ourData = JSON.parse(ourRequest.responseText);

        // Randomly select any JSON file

        let random = ourData[Math.floor(Math.random() * ourData.length)];

        let url = "https://raw.githubusercontent.com/sedc-codecademy/sedc5-ajs/master/homework-tasks/task-1/" + random;

        let secondRequest = new XMLHttpRequest();
        secondRequest.open('GET', url, true);
        secondRequest.send(null);

        secondRequest.onreadystatechange = function () {
            if (secondRequest.readyState == XMLHttpRequest.DONE) {
                let secondData = JSON.parse(secondRequest.response);


                // FUNCTIONS THEY CALCULATE OUR NUMBERS
                function calculateLog() {
                    if (secondData.operation == "log") {
                        let result = 0;
                        for (let i = 0; i < secondData.data.length; i++) {
                            result += Math.log(secondData.data[i]);
                            
                        } div.innerHTML = ("The operation" + " " + "&quot;" + secondData.operation + "&quot;" + " " + "applied to the array" + " " + secondData.data + " " + "gives a result of" + " "+ result);
                    }
                }
                calculateLog();

                function calculateSine() {
                    if (secondData.operation == "sine") {
                        let result = 0;
                        for (let i = 0; i < secondData.data.length; i++) {
                            result += Math.sin(secondData.data[i]);
                          
                        } div.innerHTML = ("The operation" + " " + "&quot;" + secondData.operation + "&quot;" + " " + "applied to the array" + " " + secondData.data + " " + "gives a result of" + " "+ result);
                    }
                }
                calculateSine();

                function calculateCosine() {
                    if (secondData.operation == "cosine") {
                        let result = 0;
                        for (let i = 0; i < secondData.data.length; i++) {
                            result += Math.cos(secondData.data[i]);
                           
                        } div.innerHTML = ("The operation" + " " + "&quot;" + secondData.operation + "&quot;" + " " + "applied to the array" + " " + secondData.data + " " + "gives a result of" + " "+ result);
                    }
                }
                calculateCosine();

                function calculateSquare() {
                    if (secondData.operation == "square") {
                        let result = 0;
                        for (let i = 0; i < secondData.data.length; i++) {
                            result += Math.sqrt(secondData.data[i]);
                            
                        } div.innerHTML = ("The operation" + " " + "&quot;" + secondData.operation + "&quot;" + " " + "applied to the array" + " " + secondData.data + " " + "gives a result of" + " "+ result);
                    }
                }
                calculateSquare();

                function calculateCube() {
                    if (secondData.operation == "cube") {
                        let result = 0;
                        for (let i = 0; i < secondData.data.length; i++) {
                            result += Math.pow(secondData.data[i]);
                            
                        } div.innerHTML =  ("The operation" + " " + "&quot;" + secondData.operation + "&quot;" + " " + "applied to the array" + " " + secondData.data + " " + "gives a result of" + " "+ result);
                    }
                }
                calculateCube();
            }
        };
    };

    ourRequest.send(null);

});