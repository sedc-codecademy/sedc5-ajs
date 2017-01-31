let numbers = [1, 2, 3, 4, 5];


let getEvens = function (array) {
    let result = [];
    for (var index = 0; index < array.length; index++) {
        var element = array[index];
        if (element % 2 === 0) {
            result.push(element);
        }
    }
    return result;
}

let getOdds = function (array) {
    let result = [];
    for (var index = 0; index < array.length; index++) {
        var element = array[index];
        if (element % 2 !== 0) {
            result.push(element);
        }
    }
    return result;
}

let getConditional = function (array, condition) {
    let result = [];
    for (let index = 0; index < array.length; index++) {
        let element = array[index];
        if (condition(element)) {
            result.push(element);
        }
    }
    return result;
}

console.log(numbers);

let evens = getEvens(numbers);
console.log(evens);

let odds = getOdds(numbers);
console.log(odds);

let evens1 = getConditional(numbers, n => n % 2 === 0);
console.log(evens1);

let odds1 = getConditional(numbers, n => n % 2 !== 0);
console.log(odds1);

let evensf = numbers.filter(n => n % 2 === 0);
console.log(evensf);

let oddsf = numbers.filter(n => n % 2 !== 0);
console.log(oddsf);

let sumPosSquare1 = function (array) {
    let sum = 0;
    for (var index = 0; index < array.length; index++) {
        var element = array[index];
        if (element > 0) {
            let value = element * element;
            sum += value;
        }
    }
    return sum;
}

let sumPosSquareF = function (array) {
    return array
        .filter(n => n > 0)
        .map(n => n * n)
        .reduce((a, v) => a + v, 0);
}

let values = [-1, 2, -3, 4, -6];

console.log(sumPosSquare1(values));
console.log(sumPosSquareF(values));
