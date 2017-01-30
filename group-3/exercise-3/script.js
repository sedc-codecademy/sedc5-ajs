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

console.log(getSquares(numbers));
console.log(getDoubles(numbers));