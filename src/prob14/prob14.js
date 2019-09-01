#!/usr/bin/env node

let input = "";
process.stdin.on("data", data => input += data.toString());

process.stdin.on("end", () => {
    let seq = input.split("\n").map(value => parseInt(value));
    let size = seq.pop();
    for (let i = 2; i < size; i++) {
        seq.push(seq[i - 1] + seq[i - 2]);
    }
    console.log(seq.join(","));
});