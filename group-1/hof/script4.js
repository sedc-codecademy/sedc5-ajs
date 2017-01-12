let makeArray = function (array, operation) {
    let result = [];
    for (var i = 0; i < array.length; i++) {
        var element = array[i];
        result.push(operation(element));
    }
    return result;
}

let makeArrayFunction = function(operation){
    return function (array) {
        return makeArray(array, operation);
    }
}

let array = [1, 9, 15, 4, 6, 3, 8];

let makeSquares = makeArrayFunction(x => x * x);
console.log(makeSquares(array));

let makeDoubles = makeArrayFunction(x => x * 2);
console.log(makeDoubles(array));

let makePlusOne = makeArrayFunction(x => x + 1);
console.log(makePlusOne(array));

console.log(makeArrayFunction(x => x + 2)(array));
console.log(makeArray(array, x => x + 2));
