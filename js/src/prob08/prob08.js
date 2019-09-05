#!/usr/bin/env node

let input = "";
const stop = 999;
const spells = [
    "ZERO", "ONE", "TWO", "THREE", "FOUR", "FIVE", "SIX",
    "SEVEN", "EIGHT", "NINE", "TEN", "ELEVEN", "TWELVE"
];

process.stdin.on("data", data => input += data.toString());

process.stdin.on("end", () => {
    let favorites = input.split(" ").map(value => parseInt(value));
    let letters = "";
    for (let i = 0; i < favorites.length; i++) {
        if (stop === favorites[i]) break;
        letters += spells[favorites[i]];
    }
    favorites = favorites.slice(0, favorites.indexOf(stop));

    /**
     *
     * @param {String} letters
     */
    function unique(letters) {
        let result = [];
        for (let char of letters) {
            if (-1 === result.indexOf(char)) {
                result.push(char);
            }
        }
        return result.join("");
    }

    letters = unique(letters);
    let result = {};
    for (let fav of favorites) {
        let current = spells[fav];
        for (let char of letters) {
            result[char] === undefined ? (result[char] = 0) : 0;
            let length = current.split("").filter(c => char === c).length;
            result[char] = length > result[char] ? length : result[char];
        }
    }

    letters = "";
    for (let item in result) {
        letters += item.repeat(result[item]);
    }

    console.log(`${favorites.join(" ")}. ${letters.split("").sort().join(" ")}`);
});
