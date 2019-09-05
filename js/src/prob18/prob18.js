#!/usr/bin/env node

let input = "";
process.stdin.on("data", data => input += data.toString());

/**
 *
 * @param {String} input
 * @returns {Array}
 */
function parse(input) {
    let result = {categories: [], magicNumber: 0};
    let parts = input.split(/\r?\n/);
    const count = parts.shift();
    const rgx = new RegExp("Category:$");
    for (let i = 0; i < parts.length; i++) {
        if (rgx.test(parts[i])) {
            let current = parts[i];
            result.categories[current] = [];
            for (let j = 0; j < count; j++) {
                i++;
                result.categories[current].push(parts[i]);
            }
        } else if (/Magic Number:/.test(parts[i])) {
            result.magicNumber = parseInt(parts[i + 1]);
            break;
        }
    }
    return [result.categories, result.magicNumber];
}

process.stdin.on("end", () => {
    let [categories, magic] = parse(input);

    console.log('Your MASH Story:');
    for (let category in categories) {
        while (categories[category].length !== 1) {
            let current = -1;
            for (let i = 0; i < magic; i++) {
                current = current >= (categories[category].length - 1) ? -1 : current + 1;
            }
            categories[category].splice(current, 1);
        }

        console.log(`${category.substr(0, category.length - 10)} - ${categories[category].shift()}`);
    }
});