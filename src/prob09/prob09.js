#!/usr/bin/env node

let input = "";
const rules = {
    "Rock": {
        beats: [{name: "Lizard", verb: "crushes"}, {name: "Scissors", verb: "crushes"}]
    },
    "Paper": {
        beats: [{name: "Rock", verb: "covers"}, {name: "Spock", verb: "disproves"}]
    },
    "Scissors": {
        beats: [{name: "Paper", verb: "cuts"}, {name: "Lizard", verb: "decapitates"}]
    },
    "Lizard": {
        beats: [{name: "Spock", verb: "poisons"}, {name: "Paper", verb: "eats"}]
    },
    "Spock": {
        beats: [{name: "Scissors", verb: "smashes"}, {name: "Rock", verb: "vaporizes"}]
    }
};
process.stdin.on("data", data => input += data.toString());

process.stdin.on("end", () => {
    let choices = input.split(" ");
    if (choices[0] === choices[1]) {
        let choice = choices[0].toUpperCase();
        console.log(`TIE, ${choice} does not affect ${choice}`);
    } else {
        const check = (first, second) => {
            let target = rules[first].beats.filter(target => second === target.name).shift();
            let verb = "WINS", won = true;

            undefined === target
                ? (verb = "LOSSES", won = false, target = rules[second].beats.filter(target => first === target.name).shift())
                : null;

            return {target, verb, won};
        };

        let { verb, target, won } = check(choices[0], choices[1]);
        console.log(`${choices[0].toUpperCase()} ${verb}, ${won ? choices[0] : choices[1]} ${target.verb} ${target.name}`);
    }
});
