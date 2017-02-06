let array = [1, 2, 4, 8, 16];

for (let index = 0; index < array.length; index++) {
    let element = array[index];
    setTimeout(() => console.log(element), index * 1000);
}