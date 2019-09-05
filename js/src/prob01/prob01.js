#!/usr/bin/env node

let name = "";
process.stdin.on("data", data => {
    name += data.toString();
});

process.stdin.on("end", () => console.log(`While we seem to disagree on this issue, ${name}, I respect your opinion and look forward to further discussion!`));
