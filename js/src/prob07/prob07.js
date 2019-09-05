#!/usr/bin/env node

let input = "";
process.stdin.on("data", data => input += data.toString());

process.stdin.on("end", () => {
    let pairs = input.split("\n");

    // Declare functions
    const isEven = value => 0 === value % 2;
    const isPrime = value => {
        if (value === 0 || value === 1) return false;
        for (let i = 0; i < Math.sqrt(value); i++) {
            if (0 === value%i) return true;
        }
    };
    const isSquare = value => Number.isInteger(Math.sqrt(value));
    const isCube = value => Number.isInteger(Math.cbrt(value));
    let handlers = [isEven, isPrime, isSquare, isCube];

    for (let p of pairs) {
        let pair = p.split(" ").map(value => {
            let p = parseInt(value);
            console.assert(Number.isInteger(p));
            return p;
        });
        // If the pair is [0, 0] stop the program
        if (0 === pair.filter(val => 0 !== val).length) break;

        let matched = false;
        let current = pair[0] + 1;

        while (!matched) {
            if (handlers[pair[1]](current)) {
                matched = true;
                console.log(current);
            } else {
                current++;
            }
        }
    }
});
