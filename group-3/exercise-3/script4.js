//////////
function add(a, b) {
    return a + b;
}

//////////
let x = 3;
add(x, 5);

let y = 7;
add(y, 5);

let z = 9;
add(z, 5);


let add5 = function (value) {
    return add(value, 5);
}

add5(x);

add5(y);

add5(z);

let add7 = function (value) {
    return add(value, 7);
}

let add11 = function (value) {
    return add(value, 11);
}

let addGenerator = function (param) {
    return function (value) {
        return add(value, param);
    }
}

let add12 = addGenerator(12);

console.log(add12(9));

console.log(addGenerator(3)(5));
console.log(add(3, 5));
////

let getValues = function (array, operation) {
    let result = [];
    for (var i = 0; i < array.length; i++) {
        var item = array[i];
        result.push(operation(item));
    }
    return result;
}

let square = n => n * n;
let arr1 = [1, 2, 3];
getValues(arr1, square);

let arr2 = [1, 2, 4];
getValues(arr2, square);

let arr3 = [1, 3, 4];
getValues(arr2, square);


getSquares = function (array) {
    return getValues(array, square);
}

getCubes = function (array) {
    return getValues(array, n => n * n * n);
}

getDoubles = function (array) {
    return getValues(array, n => n * 2);
}

getDoubles = function (array) {
    return getValues(array, n => n * 3);
}

getPlusOne = function (array) {
    return getValues(array, n => n + 1);
}

getFunctionGenerator = function (operation) {
    return function (array) {
        return getValues(array, operation);
    }
}

let numbers = [1, 2, 3, 4];

console.log(getValues(numbers, n => n * n));
console.log(getFunctionGenerator(n=>n*n)(numbers));


objects.sort((a,b) => {
    if (a.num - b.num !== 0)
        return a.num - b.num;
    return a.str.localeCompare(b.str);
})

