let oldSayPureHi = sayPureHi;

sayPureHi = (name) => {
    count ++;
    return oldSayPureHi(name);
}

let oldlog = console.log;

console.log = (value) => {
    //sendtomyserver(value);
    oldlog(value);
}

