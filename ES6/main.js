// var ---> function
// let ---> block
// const --> block

function sayHello() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log(i);
}
sayHello();

function sayHi() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
    // console.log(i);
}
sayHi();

// =====================Arrow function ==================================
var fun = (num) => {
    return num + num;
};
var fun1 = (num) => num + num;
console.log(fun(5));
console.log(fun1(5));