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


// addHold(1, 2, (a, b, s) => {
//     console.log(`The result of ${a} plus ${b} equals ${s}`)
//     mulHold(5, s, (a, b, p) => {
//         addHold(7, p, (a, b, s) => {
//             console.log(`The result of ${a} plus ${b} equals ${s}`)
//         })
//         console.log(`The result of ${a} times ${b} equals ${p}`)
//     });
// });


function calculate(param, a, b) {
    if (param === "add")
        return addHold(a, b);
    if (param === "mul")
        return mulHold(a, b);
    if (param === "div")
        return divHold(a, b);
    return Promise.reject(`No match for param ${param}`);
}


function doCalculation() {
    let a = 1;
    let b = 2;
    let c = 5;
    let d = 7;
    let r1, r2, r3;
    calculate("add", a, b)
        .then(result => {
            console.log(`The result of ${a} plus ${b} equals ${result}`)
            r1 = result;
            return calculate("mul", result, c);
        })
        .then(result => {
            console.log(`The result of ${r1} times ${c} equals ${result}`)
            r2 = result;
            return calculate("add", result, d);
        })
        .then(result => {
            console.log(`The result of ${r2} plus ${d} equals ${result}`)
            r3 = result;
            return calculate("div", result, 0);
        })
        .catch(error => console.log(error));
}

doCalculation();