let add = document.getElementById("add");
add.addEventListener("click", function(){
    let tds = document.getElementsByTagName("td");
    for (let index = 0; index < tds.length; index++) {
        let td = tds[index];
        td.innerHTML = '';
        let button = document.createElement("button");
        button.innerHTML = `Button #${index}`;
        button.addEventListener("click", function(){
            document.getElementById("result").innerHTML = `I'm button #${index}`;
        });
        td.appendChild(button);
    }
});