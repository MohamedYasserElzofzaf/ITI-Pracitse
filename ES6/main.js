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