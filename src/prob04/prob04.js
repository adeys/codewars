#!/usr/bin/env node

let input = "";
process.stdin.on("data", data => input += data.toString());

process.stdin.on("end", () => {
    let parts = input.split("\n").map(value => parseFloat(value));
    let length = parts.shift();

    for (let i = 0; i < length * 2; i+=2) {
        let tax = parts[i]/100;
        let amount = parts[i+1];
        console.log(`On your $${parts[i+1].toFixed(2)} purchase, the tax amount is ${((tax * amount)/(1.0 + tax)).toFixed(2)}`);
    }
});