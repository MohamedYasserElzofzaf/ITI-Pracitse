const calc = (n1, n2) => {
    return Number(n1) + Number(n2);
};

console.log(calc(process.argv[2], process.argv[3]));