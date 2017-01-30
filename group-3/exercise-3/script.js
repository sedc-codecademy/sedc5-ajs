let numbers = [1, 2, 3, 4, 5];
//for (var i = 0; i < 10; i++) numbers.push(Math.random() * 20 | 0);



let getSquares = (array) => {
    let result = [];
    for (var index = 0; index < array.length; index++) {
        var element = array[index];
        result.push(element * element);
    }
    return result;
}

let getDoubles = (array) => {
    let result = [];
    for (var index = 0; index < array.length; index++) {
        var element = array[index];
        result.push(element * 2);
    }
    return result;
}

let getPlusOne = (array) => {
    let result = [];
    for (var index = 0; index < array.length; index++) {
        var element = array[index];
        result.push(element + 1);
    }
    return result;
}

let getCollatz = (array) => {
    let result = [];
    for (var index = 0; index < array.length; index++) {
        var element = array[index];
        let value = (element % 2) ? element * 3 + 1 : element / 2;
        result.push(value);
    }
    return result;
}

let getValues = (array, operation) => {
    let result = [];
    for (let index = 0; index < array.length; index++) {
        let element = array[index];
        let value = operation(element);
        result.push(value);
    }
    return result;
}

let squares = getSquares(numbers);
let doubles = getDoubles(numbers);
let collatzSeq = getCollatz(numbers);

console.log(squares);
console.log(doubles);
console.log(collatzSeq);

let squares1 = getValues(numbers, n => n*n);
let doubles1 = getValues(numbers, n => n*2);

let collatz = (number) => {
    if (number % 2)
        return number * 3 + 1;
    return number / 2;
}

let collatzSeq1 = getValues(numbers, n => (n % 2) ? n * 3 + 1 : n / 2);
let collatzSeq2 = getValues(numbers, collatz);

console.log(squares1);
console.log(doubles1);
console.log(collatzSeq1);
console.log(collatzSeq2);

let squaresm = numbers.map(n => n*n);
let doublesm = numbers.map(n => n*2);
let collatzSeqm = numbers.map(collatz);

console.log(squaresm);
console.log(doublesm);
console.log(collatzSeqm);