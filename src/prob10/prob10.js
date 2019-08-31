#!/usr/bin/env node

let input = "";
process.stdin.on("data", data => input += data.toString());

process.stdin.on("end", () => {
    input.split("\n").forEach(input => {
        let parts = [];
        if (-1 !== input.indexOf(":")) {
            parts = input.split(":");
            let birth = new Date(parts[0]);
            let age = parseInt(parts[1]);
            if (0 < age) {
                birth.setFullYear(birth.getFullYear() + age);
                console.log(`Will be ${age} on ${birth.toISOString().substr(0, 10)} if born on ${parts[0]}${age > 100 ? ' (good job!)' : ''}`);
            } else {
                birth.setFullYear(birth.getFullYear() + 1);
                birth.setDate(birth.getDate() - 1);
                console.log(`Will still be 0 up to ${birth.toISOString().substr(0, 10)} if born on ${parts[0]}`);
            }

        } else {
            parts = input.split(" ");
            console.log(`If born on ${parts[0]}, will be ${getYears(new Date(parts[0]), new Date(parts[1]))} years old on ${parts[1]}`);
        }
    });
});

/**
 * @param {Number} year
 * @return {Boolean}
 */
function isLeapYear(year) {
    if (0 === year % 4) {
        return 0 === year % 100 ? 0 === year % 400 : true;
    }
    return false;
}

/**
 *
 * @param {Date} start
 * @param {Date} end
 */
function getYears(start, end) {
    let length = end.getFullYear() - start.getFullYear();
    let result = start;
    result.setFullYear(start.getFullYear() + length);

    return result > end ? length - 1 : length;
}