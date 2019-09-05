#!/usr/bin/env node

let input = "";
const max = 100;
process.stdin.on("data", data => input += data.toString());

process.stdin.on("end", () => {
    let couples = parseInt(input);
    let shakes = 0;
    if (!isNaN(couples) && couples <= max) {
        for (let i = 0; i < couples; i++) {
            shakes += i;
        }

        console.log(shakes * 4);
    }
});