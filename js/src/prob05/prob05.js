#!/usr/bin/env node

let input = "";
const maxHeight = 1000;
process.stdin.on("data", data => input += data.toString());

process.stdin.on("end", () => {
    let height = parseInt(input);
    let cubes = 0;
    if (!isNaN(height) && height <= maxHeight) {
        for (let i = 1; i <= height; i++) {
            cubes += (i*i);
        }
        console.log(cubes);
    }
});