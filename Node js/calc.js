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