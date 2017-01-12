let source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

let evens = getEvens(source);
console.log(evens);

function getEvens(array){
    let result = [];
    for (var i = 0; i < array.length; i++) {
        var element = array[i];
        if (element % 2 === 0){
            result.push(element);
        }
    }
    return result;
}