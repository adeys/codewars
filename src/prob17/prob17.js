#!/usr/bin/env node

let input = "";
process.stdin.on("data", data => input += data.toString());

process.stdin.on("end", () => {
    let parts = input.split(/\r?\n/).shift();
    let map = {};
    for (let i = 0; i < parts.length; i++) {
        let current = parts[i];
        map[current] = map[current] ? map[current] : 0;
        map[current]++;
    }

    let regular = {}, tenPlus = {};
    for (let char of Object.keys(map)) {
        let current = map[char];
        current < 10 ? regular[char] = current : tenPlus[char] = current;
    }

    let string = "";
    Object.keys(regular).sort((a, b) => {
        const code = input => input === ' ' ? 20 : input.charCodeAt(0);
        return code(a) > code(b) ? -1 : 1;
    }).forEach(key => string +=`${key === " " ? "_" : key}[${regular[key]}]`);

    string += ";";

    Object.keys(tenPlus).sort((a, b) => {
        const code = input => input === ' ' ? 20 : input.charCodeAt(0);
        return code(a) < code(b) ? -1 : 1;
    }).forEach(key => string +=`${key === " " ? "_" : key}[${tenPlus[key]}]`);

    console.log(string);
});