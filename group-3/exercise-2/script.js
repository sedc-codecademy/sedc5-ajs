$(()=>{
    let result = $("#result");

    $("#add").on("click", () => {
        let tds=$("td");
        for (let index = 0; index < tds.length; index++){
            let td = $(tds[index]);
            let button = document.createElement("button");
            button.innerHTML = `Button #${index+1}`;
            button.addEventListener('click', ()=>{
                alert(`Hi, I'm button #${index+1}`);
            });
            td.append(button);
        }
    })
})