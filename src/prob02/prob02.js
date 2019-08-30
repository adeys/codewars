#!/usr/bin/env node

let input = "";
process.stdin.on("data", data => input += data.toString());

process.stdin.on("end", () => {
   let parts = input.split(" ", 3).map(value => parseInt(value));
   console.log(`${input}. ${parts[0] >= parts[1]/parts[2] ? "I will make it" : "I will be late"}`);
});
