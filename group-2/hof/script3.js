let makeArray = function (array, operation) {
    let result = [];
    for (var i = 0; i < array.length; i++) {
        var item = array[i];
        result.push(operation(item));
    }
    return result;
}

let square = x => x * x;
let makeSquares = function (array) {
    return makeArray(array, square)
};
console.log(makeSquares([1, 2, 3, 4]))

let cube = x => x * x * x;
let makeCubes = function (array) {
    return makeArray(array, cube)
};
console.log(makeCubes([1, 2, 3, 4]))

function makeArrayFunction(operation) {
    return function (array) {
        return makeArray(array, operation)
    };
}

let makeSquares2 = makeArrayFunction(square);
console.log(makeSquares2([1, 2, 3, 4]))

let makeSins = makeArrayFunction(Math.sin);
console.log(makeSins([1, 2, 3, 4]))


console.log(makeArray([1, 2, 3, 4], x => x * 2));
console.log(makeArrayFunction(x => x * 2)([1, 2, 3, 4]));

