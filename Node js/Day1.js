/*
const calc = (n1, n2) => {
    return Number(n1) + Number(n2);
};

console.log(calc(process.argv[2], process.argv[3]));
*/
// Read from file
const fs = require("fs");
let file = fs.readFileSync("./resources/txt.txt");
console.log(file);