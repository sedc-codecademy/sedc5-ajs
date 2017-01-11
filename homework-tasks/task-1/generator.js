'use strict'

let fs = require("fs");
let filenames = [];
let operations =  ["sine", "cosine", "log", "square", "cube"]
let getRandomInt = (top) => Math.random() * top | 0;

fs.readdir(".", (err, files)=>{
    files = files.filter(f => f.endsWith(".json"));
    for (var index = 0; index < files.length; index++) {
        var file = files[index];
        fs.unlink(file);
    }
})
 
for (var index = 0; index < 20; index++) {
    let name = Math.random().toString(36).substr(2, 8) + ".json";
    let data = Array.from({length: 20}, ()=>getRandomInt(50)+1);
    let operation = operations[getRandomInt(4)];

    fs.writeFile(name, JSON.stringify({
        data: data,
        operation: operation
    }));
    filenames.push(name);
}

fs.writeFile("filelist.json", JSON.stringify(filenames));