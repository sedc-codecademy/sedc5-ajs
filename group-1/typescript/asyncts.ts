function addHoldTs(a, b) {
    let promise = new Promise((resolve, reject) => {
        setTimeout(function () {
            let sum = a + b;
            resolve(sum);
        }, 1000);
    });

    return promise;
}

function mulHoldTs(a, b) {
    let promise = new Promise((resolve, reject) => {
        setTimeout(function () {
            let product = a * b;
            resolve(product);
        }, 1000);
    });

    return promise;
}

function divHoldTs(a, b) {
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

async function calculateTs(param, a, b) {
    if (param === "add") {
        return await addHoldTs(a, b);
    }
    if (param === "mul") {
        return await mulHoldTs(a, b);
    }
    if (param === "div") {
        return await divHoldTs(a, b);
    }
    return await Promise.reject(`No matching operation found for param ${param}`);
}

async function showTs() {
    console.log("starting show");

    try {

        let sum = await calculateTs("add", 4, 6);
        console.log(`The sum is ${sum}`);
        let product = await calculateTs("mul", sum, 5);
        console.log(`The product is ${product}`);
        let divZero = await calculateTs("div", 4, 0);
        let ratio = await calculateTs("div", product, 2)
        console.log(`The ratio is ${ratio}`);
    } catch (error) {
        console.log(error);
    }

    console.log("ending show");
}

showTs();