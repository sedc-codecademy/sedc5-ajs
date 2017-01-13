let numbers = [1, 3, 5, 2, 6, 9, 12, 5, 16, 7];

let getOdds = function (array) {
    let result = [];
    for (var i = 0; i < array.length; i++) {
        var item = array[i];
        if (item % 2 !== 0) {
            result.push(item);
        }
    }
    return result;
};

let getEvens = function (array) {
    let result = [];
    for (var i = 0; i < array.length; i++) {
        var item = array[i];
        if (item % 2 === 0) {
            result.push(item);
        }
    }
    return result;
}

let getBetween = function (array) {
    let result = [];
    for (var i = 0; i < array.length; i++) {
        var item = array[i];
        if (item > 5 && item < 10) {
            result.push(item);
        }
    }
    return result;
}

let getItems = function (array, condition) {
    let result = [];
    for (var i = 0; i < array.length; i++) {
        var item = array[i];
        if (condition(item)) {
            result.push(item);
        }
    }
    return result;
}


console.log(getOdds(numbers));
console.log(getItems(numbers, x => (x % 2 !== 0)));

console.log(getEvens(numbers));
console.log(getItems(numbers, x => x % 2 === 0));

console.log(getBetween(numbers));
console.log(getItems(numbers, x => x > 5 && x < 10));

console.log(getItems(numbers, x => x % 3 === 0));
console.log(getItems(numbers, x => x % 5 === 0));

console.log(getItems(numbers, x => isFullSquare(x)));

function isFullSquare(number) {
    let sqrt = Math.sqrt(number);
    let isqrt = Math.sqrt(number) | 0;
    return sqrt === isqrt;
}