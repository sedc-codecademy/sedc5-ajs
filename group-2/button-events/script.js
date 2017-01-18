//using immediately invoked function expression (IIFE) with index2
document.getElementById("add").addEventListener("click", function () {
    let tds = document.getElementsByTagName("td");

    for (var index = 0; index < tds.length; index++) {
        var td = tds[index];
        var button = document.createElement("button");
        button.textContent = `Button #${index}`;

        button.addEventListener('click', (function () {
            var index2 = index;
            return function () {
                let result = document.getElementById("result");
                result.innerHTML = `Button #${index2} has been clicked`;
            }
        })());
        td.appendChild(button);
    }
})

//using immediately invoked function expression (IIFE) with index as param
document.getElementById("add").addEventListener("click", function () {
    let tds = document.getElementsByTagName("td");

    for (var index = 0; index < tds.length; index++) {
        var td = tds[index];
        var button = document.createElement("button");
        button.textContent = `Button #${index}`;

        //var index2 = index;
        button.addEventListener('click', (function (p) {
            return function () {
                let result = document.getElementById("result");
                result.innerHTML = `Button #${p} has been clicked`;
            }
        })(index));
        td.appendChild(button);
    }
})


//using let
document.getElementById("add").addEventListener("click", function(){
    let tds = document.getElementsByTagName("td");

    for (let index = 0; index < tds.length; index++) {
        let td = tds[index];
        let button = document.createElement("button");
        button.textContent = `Button #${index}`;
        button.addEventListener('click', function(){
            let result = document.getElementById("result");
            result.innerHTML = `Button #${index} has been clicked`;
        })

        td.appendChild(button);
    }
})