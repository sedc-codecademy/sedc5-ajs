function addHold(a, b) {
    let promise = new Promise((resolve, reject) => {
        setTimeout(function () {
            let result = a + b;
            resolve(result);
        }, 1000);
    });
    return promise;
}

function mulHold(a, b) {
    let promise = new Promise((resolve, reject) => {
        setTimeout(function () {
            let result = a * b;
            resolve(result);
        }, 1000);
    });
    return promise;
}

function divHold(a, b) {
    let promise = new Promise((resolve, reject) => {
        setTimeout(function () {
            try {
                let result = a / b;
                resolve(result);
            } catch (error) {
                reject(error);
            }
        }, 1000);
    });
    return promise;
}


function calculate(param, a, b) {
    if (param === "add")
        return addHold(a, b);
    if (param === "mul")
        return mulHold(a, b);
    if (param === "div")
        return divHold(a, b);
    return Promise.reject(`No match for param ${param}`);
}


async function doCalculation() {
    let a = 1;
    let b = 2;
    let c = 5;
    let d = 7;

    let r1 = await calculate("add", a, b);
    console.log(`The result of ${a} plus ${b} equals ${r1}`);
    let r2 = await calculate("mul", r1, c);
    console.log(`The result of ${r1} times ${c} equals ${r2}`);
    let r3 = await calculate("add", r2, d);
    console.log(`The result of ${r2} plus ${d} equals ${r3}`);
    console.log(await calculate("div", r3, 0));

}

doCalculation();