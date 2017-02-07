function mul(a: number, b: number) {
    return a * b;
}

console.log(mul(2, 3));

let x = 7;
let wname = "Weko";
let mytruth = true;

let someObj = {
    items: [
        { id: 1, value: 10 },
        { id: 2, value: 20 },
        { id: 3, value: 30 },
        { id: 4, value: 7 }
    ]
};

let someArr: number[] = [];

someArr.push(3);
someArr.push(7);

function sumValues(container: { items: { id: number; value: number; }[]; }) {
    let sum = 0;
    let items = container.items;
    for (let index = 0; index < items.length; index += 1) {
        let item = items[index];
        sum += item.value;
    }
    return sum;
}

console.log(sumValues(someObj));