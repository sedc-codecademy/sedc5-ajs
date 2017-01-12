let source = [1, 2, 3, 4, 5, 6];

let makeSquares = function (array) {
    let result = [];
    for (var i = 0; i < array.length; i++) {
        var element = array[i];
        result.push(element * element);
    }
    return result;
};

let makeDoubles = function (array) {
    let result = [];
    for (var i = 0; i < array.length; i++) {
        var element = array[i];
        result.push(element * 2);
    }
    return result;
}

let makePlusOne = function (array) {
    let result = [];
    for (var i = 0; i < array.length; i++) {
        var element = array[i];
        result.push(element + 1);
    }
    return result;
}


let makeArray = function (array, operation) {
    let result = [];
    for (var i = 0; i < array.length; i++) {
        var element = array[i];
        result.push(operation(element));
    }
    return result;
}

let squares = makeSquares(source);
console.log(squares);

let doubles = makeDoubles(source);
console.log(doubles);

let plusOnes = makePlusOne(source);
console.log(plusOnes);


let plusTwo = makeArray(source, function (number) { return number + 2 });
console.log(plusTwo);

let plusTwoTimesThree = makeArray(source, function (number) { return (number + 2) * 3 });
console.log(plusTwoTimesThree);