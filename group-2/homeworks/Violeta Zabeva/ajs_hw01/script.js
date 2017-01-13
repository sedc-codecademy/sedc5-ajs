

let button = document.getElementById("btn_random");
let display = document.getElementById("display");
    button.addEventListener("click",function() {
        let mainRequest = new XMLHttpRequest();
        let mainURL =  "https://raw.githubusercontent.com/sedc-codecademy/sedc5-ajs/master/homework-tasks/task-1/";
            mainRequest.open('GET', mainURL + "filelist.json",true);
            mainRequest.send(null);

            mainRequest.onreadystatechange = function() {
                if(mainRequest.readyState == XMLHttpRequest.DONE) {
                    let data = JSON.parse(mainRequest.responseText);
                     let render = data[Math.floor(Math.random() * data.length)];

                     let newRequest = new XMLHttpRequest();
                        newRequest.open('GET',  mainURL + render , true);
                        newRequest.send(null);

            newRequest.onreadystatechange = function() {
                if(newRequest.readyState == XMLHttpRequest.DONE) {
                    let newData = JSON.parse(newRequest.response);
                    if(newData.operation == "sine") {
                        calculateSine(newData);
                    }else if(newData.operation == "cosine") {
                        calculateCosine(newData);
                    }else if(newData.operation == "log") {
                        calculateLog(newData);
                    }else if(newData.operation == "square") {
                        calculateSquare(newData);
                    }else if(newData.operation == "cube") {
                        calculateCube(newData);
                    }
                  }
               }
             }
         }
     });

      function calculateSine(newData) {
        let sum = 0;
            let array = newData.data;
            for(let i=0; i<array.length; i++){
                sum += Math.sin(array[i]);
            }
            display.innerHTML = "The operation " + newData.operation + " applied to the array " + array + " gives a result of " + sum;
        }

         function calculateCosine(newData) {
        let sum = 0;
            let array = newData.data;
            for(let i=0; i<array.length; i++){
                sum += Math.cos(array[i]);
            }
            display.innerHTML = "The operation " + newData.operation + " applied to the array " + array + " gives a result of " + sum;
        }
     
      function calculateLog(newData) {
        let sum = 0;
            let array = newData.data;
            for(let i=0; i<array.length; i++){
                sum += Math.log(array[i]);
            }
            display.innerHTML = "The operation " + newData.operation + " applied to the array " + array + " gives a result of " + sum;
        }

         function calculateSquare(newData) {
        let sum = 0;
            let array = newData.data;
            for(let i=0; i<array.length; i++){
                sum += Math.pow(array[i], 2);
            }
            display.innerHTML = "The operation " + newData.operation + " applied to the array " + array + " gives a result of " + sum;
        }

         function calculateCube(newData) {
        let sum = 0;
            let array = newData.data;
            for(let i=0; i<array.length; i++){
                sum += Math.cbrt(array[i]);
            }
            display.innerHTML = "The operation " + newData.operation + " applied to the array " + array + " gives a result of " + sum;
        }

