#!/usr/bin/env node

let input = "";
process.stdin.on("data", data => input += data.toString());

process.stdin.on("end", () => {
    let parts = input.split(/\r?\n/).shift().split(" ");
    let prev = "";
    let result = [];
    let count = 0;

    for (let i = 0; i < parts.length; i++) {
        let current = parts[i];
        let currentUp = current.toUpperCase();
        if (prev === currentUp) {
            if (currentUp === "IS" || currentUp === "HAD") {
                count++;
                if (1 < count) continue;
            } else {
                count = 0;
                continue;
            }
        }
        result.push(current);
        prev = current.toUpperCase();
    }

    console.log(result.join(" "));
});