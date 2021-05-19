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

// ====================Object============================================
const person = {
    name: "Yasser",
    job: function() {},
    age() {},
};

person.job();
person["name"] = "Mohammed";

// =====================this============================================
const man = {
    name: "Yasser",
    walk() {
        console.log(this);
    },
};
man.walk();
const walk = man.walk;
walk();

// =====================Arrow function ==================================
var fun = (num) => {
    return num + num;
};
var fun1 = (num) => num + num;
console.log(fun(5));
console.log(fun1(5));

// ============================spread operator ==============================
const first = [1, 2, 3, 4, 5];
const second = [6, 7, 8, 9];
const combined = first.concat(second);
const combined1 = {...first, ...second };
console.log(combined);
console.log(combined1);

// ============================destructuring object==========================
const address = {
    street: "",
    city: "",
    country: "",
};

const street = address.street;
const city = address.city;
const country = address.country;
// we can use instead
const { street, city, country } = address;