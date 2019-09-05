#!/usr/bin/env node

let input = "";
process.stdin.on("data", data => input += data.toString());

process.stdin.on("end", () => {
    let parts = input.split(/\r?\n/).map(value => value.toUpperCase() === "X" ? value.toUpperCase() : parseInt(value));
    let x = parts.indexOf("X");
    let result = 0;

    switch(true) {
        case x === 0 || x === 3:
            result = (parts[1] * parts[2]) / parts[3 - x];
            break;
        case x === 1 || x === 2:
            result = (parts[0] * parts[3]) / parts[3 - x];
            break;
    }

    console.log(result.toFixed(1));
});