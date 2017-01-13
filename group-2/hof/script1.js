let numbers = [1, 3, 5, 2, 6, 9, 12, 5, 16, 7];

// let makeSquares = function (array) {
//     let result = [];
//     for (var i = 0; i < array.length; i++) {
//         var item = array[i];
//         result.push(item * item);
//     }
//     return result;
// }

// let makeDoubles = function (array) {
//     let result = [];
//     for (var i = 0; i < array.length; i++) {
//         var item = array[i];
//         result.push(item * 2);
//     }
//     return result;
// }

// let makePlusOne = function (array) {
//     let result = [];
//     for (var i = 0; i < array.length; i++) {
//         var item = array[i];
//         result.push(item + 1);
//     }
//     return result;
// }


// let makeAsIndex = function (array) {
//     let result = [];
//     for (var i = 0; i < array.length; i++) {
//         var item = array[i];
//         result.push({
//             index: item
//         });
//     }
//     return result;
// }

let makeArray = function (array, operation) {
    let result = [];
    for (var i = 0; i < array.length; i++) {
        var item = array[i];
        result.push(operation(item));
    }
    return result;
}


console.log(numbers);



let squares = makeArray(numbers, x => x * x);
console.log(squares);

let plusOnes = makeArray(numbers, x => x + 1);
console.log(plusOnes);

let doubles = makeArray(numbers, x => x * 2);
console.log(doubles);

let indices = makeArray(numbers, x => { return { index: x }; });
console.log(indices);

let plusTwo = makeArray(numbers, x => x + 2);
console.log(plusTwo);

/////////////////

// let myObject = {
//     index: 1,
//     value: "some-value",
//     squarer: makeSquares
// }

// let squares2 = myObject.squarer(numbers);
// //console.log(squares2);

// makeSquares.someObject = {
//     index: 2,
//     value: "other-value",
//     fn: function (param) {
//         console.log(`I'm a function that's a property of a property of a function ${param}`);
//     }
// }