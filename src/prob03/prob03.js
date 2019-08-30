#!/usr/bin/env node

let input = "";
const Pi = 3.14159;
const maxLength = 100;

process.stdin.on("data", data => input += data.toString());

process.stdin.on("end", () => {
    let length = parseInt(input);
    if (!isNaN(length) && length <= maxLength) {
        console.log(((length * length * Pi) * 3 / 4).toFixed(2));
    }
});