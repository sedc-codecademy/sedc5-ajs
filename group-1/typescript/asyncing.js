"use strict"

function addHold(a, b) {
    let promise = new Promise((resolve, reject) => {
        setTimeout(function () {
            let sum = a + b;
            resolve(sum);
        }, 1000);
    });

    return promise;
}

function mulHold(a, b) {
    let promise = new Promise((resolve, reject) => {
        setTimeout(function () {
            let product = a * b;
            resolve(product);
        }, 1000);
    });

    return promise;
}

function divHold(a, b) {
    let promise = new Promise((resolve, reject) => {
        setTimeout(function () {
            if (b === 0) {
                reject("Unable to divide by zero");
                return;
            }
            let ratio = a / b;
            resolve(ratio);
        }, 1000);
    });
    return promise;
}

// function calculate(param, a, b, callback, errorCallback) {
//     if (param === "add") {
//         addHold(a, b, callback);
//         return;
//     }
//     if (param === "mul") {
//         mulHold(a, b, callback);
//         return;
//     }
//     if (param === "div") {
//         divHold(a, b, callback);
//         return;
//     }
//     errorCallback(`No matching operation found for param ${param}`);
// }



// addHold(4, 6, (sum) => {
//     console.log(`The sum is ${sum}`)
//     mulHold(sum, 5, product => {
//         divHold(product, 2, ratio => {
//             console.log(`The ratio is ${ratio}`);
//         });
//         console.log(`The product is ${product}`)
//     })
// });

//calculate("add", 4, 6, sum => console.log(`The sum is ${sum}`), err => console.log(err));

function calculate(param, a, b) {
    if (param === "add") {
        return addHold(a, b);
    }
    if (param === "mul") {
        return mulHold(a, b);
    }
    if (param === "div") {
        return divHold(a, b);
    }
    return Promise.reject(`No matching operation found for param ${param}`);
}


function show() {
    console.log("starting show");

    // calculate("div", 4, 0)
    //     .then(result => console.log(result))
    //     .catch(err => console.log(err));

    addHold(4, 6)
        .then(sum => {
            console.log(`The sum is ${sum}`);
            return mulHold(sum, 5);
        }).then(product => {
            console.log(`The product is ${product}`);
            return divHold(product, 2)
        }).then(ratio => {
            console.log(`The ratio is ${ratio}`);
        }).catch(err => console.log(err));

    console.log("ending show");
}

show();