function addHold(a, b) {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (a === 0)
                return reject("wont add with zero");
            var result = a + b;
            return resolve(result);
        }, 2000);
    });

    return promise;
}

function mullHold(a, b) {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (a === 0)
                return reject("wont mul with zero");
            var result = a * b;
            return resolve(result);
        }, 2000);
    });

    return promise;
}

async function calculate(param, a, b) {
    if (param === "add")
        return await addHold(a, b);
    else
        return await mullHold(a, b);
}

async function show(){
    console.log(await calculate("mul", 3, 2));

    // calculate("add", 3, 2).then(r => console.log(r)).catch(e => console.log(e));
    // calculate("add", 0, 2).then(r => console.log(r)).catch(e => console.log(e));
    // calculate("mul", 3, 2).then(r => console.log(r)).catch(e => console.log(e));
    // calculate("mul", 0, 2).then(r => console.log(r)).catch(e => console.log(e));
}

show();


