#!/usr/bin/env node

let input = "";
process.stdin.on("data", data => input += data.toString());

process.stdin.on("end", () => {
    let lines = input.split("\n");
    let [width, height] = lines.shift().split(" ");
    let map = [];
    lines.forEach(line => {
        let parts = line.split(" ");
        let y = parts.shift();
        map[parseInt(y)] = line.substr(y.length);
    });
    let axis = "";
    for (let i = 0; i < width; i++) {
        axis += i % 10;
    }
    map.unshift(axis);

    for (let i = height + 1; i > 0; i--) {
        console.log(`${i - 1} ${map[i - 1]}`);
    }

});