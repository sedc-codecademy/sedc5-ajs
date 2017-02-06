function multiply(a: number, b: number) {
    return a * b;
}

console.log(multiply(4, 6));
console.log(multiply(4, 6));

console.log(multiply(17.5, 4));


function sumValues(someobject: { items: { value: number }[] }): number {
    let sum = 0;
    let items = someobject.items;
    for (let index = 0; index < items.length; index += 1) {
        let item = items[index];
        sum += item.value
    }
    return sum;
}

sumValues({ items: [{ value: 3 }] });

let x = 3;
let namesw = "Weko";
let mybool = false;

let myobj: { x: number, y: number} = {x: 3, y: 4};

let myNumberArray: number[] = [1, 2];
myNumberArray.push(3);

let myPoints: { x: number, y: number}[] = [];
myPoints.push(myobj);
myPoints.push( {x: 5, y: 12})

console.log(myPoints.map(point => Math.sqrt(point.x * point.x + point.y * point.y)));




// {
//     items: [ {value: 1}, {value: 2}]
// }