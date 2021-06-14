const { readFile, writeFile } = require("fs");
let operations;
let operation = handleArgs();
if (operation) {
    readFile("./resources/operations.json", "utf-8", (err, data) => {
        if (err) operations = [];
        else operations = JSON.parse(data);

        operations.push(operation);
        data = JSON.stringify(operations);
        writeFile("./resources/operations.json", data, (err) => {
            console.log(err);
        });
    });
}

// Handle args
function handleArgs() {
    let operation;
    switch (process.argv[2]) {
        case "plus":
        case "+":
            {
                operation = {
                    operator: process.argv[2],
                    operand1: process.argv[3],
                    operand2: process.argv[4],
                    result: Number(process.argv[3]) + Number(process.argv[4]),
                };
                break;
            }
        default:
            {
                console.log("specify valid operator");
            }
    }
    return operation;
}