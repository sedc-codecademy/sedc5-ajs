function selectMany(array, cb){
  return array.map((element) => {
    return typeof cb === 'function' ? cb(element) : element;
  }).reduce((a, b) => a.concat(b));
}

let src = [
    [1, 2, 3, 4],
    [2, 7, 8, 9],
    [1, 2, 3, 4],
];

src1 = [1, 123, 567];

console.log(selectMany(src));
console.log(selectMany(src1, (el) => {
  return String(el).split('').map(el => Number(el));
}));