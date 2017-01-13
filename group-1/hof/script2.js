let source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

let evens = getItems(source, x => x % 2 === 0);
console.log(evens);

let odds = getItems(source,  x => x % 2 !== 0);
console.log(odds);

let between5and10 = getItems(source, x => x > 5 && x < 10);
console.log(between5and10);

function getItems(array, comparisson) {
    let result = [];
    for (var i = 0; i < array.length; i++) {
        var element = array[i];
        if (comparisson(element)) {
            result.push(element);
        }
    }
    return result;
}
