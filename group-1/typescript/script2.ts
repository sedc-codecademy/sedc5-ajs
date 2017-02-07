let array = [1, 2, 4, 8, 16, 32];

for (let index = 0; index < array.length; index++) {
    let element = array[index];
    setTimeout(function () {
        console.log(element);
    }, index * 500);

}