let src = [
    [1, 2, 3, 4],
    [2, 7, 8, 9],
    [1, 2, 3, 4],
];

let src1 = [1, 123, 567];

Array.prototype.selectMany = function(fn) {

    let resultArray = [];
    let result = [];

    for(let i = 0; i < this.length; i++) {
        resultArray = resultArray.concat(this[i]);
    }

    for(let n = 0; n < resultArray.length; n++) {
        
        let string = fn(resultArray[n]);

        if(typeof(string) === "string") {
            for(let s = 0; s < string.length; s++) {
                result.push(Number(string[s]))
            }
        } else {
            result.push(Number(string))
        }

    }

    return result;
}


console.log(src.selectMany(function(x){ return x;}));
console.log(src1.selectMany(function(x){ return x + 2;}));
console.log(src1.selectMany(function(x){ return x + "";}));
