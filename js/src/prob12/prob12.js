#!/usr/bin/env node

let input = "";
process.stdin.on("data", data => input += data.toString());

process.stdin.on("end", () => {
    let parts = input.split("\n").map(value => parseInt(value));
    let pi = Pi(parts[0]);
    console.log(pi.toString().substr(2)[parts[1] - 1]);
});

/**
 *
 * @param {Number} iter
 * @return {Number}
 */
function Pi(iter) {
    let pi = 3;
    let add = true;
    for (let i = 2; i < iter * 2; i += 2) {
        let value = (4/(i * (i + 1) * (i + 2)));
        add ? pi += value : pi -= value;
        add = !add;
    }

    return pi;
}