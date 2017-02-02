document.getElementById('button').addEventListener("click", function(event) {

// Promise object assigns fulfillment and rejection handlers for asnc manupulated getJson function, or catching the fail reason
    getJson('filelist.json').then(
        function(value) {

            let array = JSON.parse(value);
            let randomNumber = Math.floor(Math.random() * array.length);

            //Use array Nmbering feature to get all names from the innitial array Json file
            getJson(array[randomNumber]).then(function(object) {

                let result = JSON.parse(object);
                let arrayNumber = result.data;
                let operation = result.operation;

                let arraySum = 0;
                for(let i = 0; i < arrayNumber.length; i++){
                    arraySum += Operators[operation](arrayNumber[i]);
                }
                
                document.getElementById('output').innerHTML = `The operation "${operation}" applied to the array ${arrayNumber} gives a result of ${arraySum}.`

            })
            .catch(function(reason) {
                console.log(reason)
            })

        })
        .catch(
            function(reason){
                console.log(reason);
        });

})

// function for getting ajax file, returning Promise object, that can be manipulated when finished,
function getJson (jsonName) {

    return new Promise(function(resolve, reject) {

        let xhr = new XMLHttpRequest();

        xhr.open('GET', `https://raw.githubusercontent.com/sedc-codecademy/sedc5-ajs/master/homework-tasks/task-1/${jsonName}`, true);
        xhr.send(null);

        xhr.onload = function() {
            resolve(this.responseText);
        };

        xhr.onerror = reject;

    });
}


// Operstors object - methods
let Operators = {
    sine: function(number) {
        return Math.sin(number);
    },
    cosine: function(number) {
        return Math.cos(number);
    },
    square: function(number) {
        return Math.pow(number, 2);
    },
    log: function(number) {
        return Math.log(number);
    },
    cube: function(number) {
        return Math.pow(number, 3);
    }
}
