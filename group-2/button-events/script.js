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