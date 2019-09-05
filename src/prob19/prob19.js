#!/usr/bin/env node

let input = "";
process.stdin.on("data", data => input += data.toString());

process.stdin.on("end", () => {
    let parts = input.split(/\r?\n/);
    /**
     * @param {String} pass
     * @return {Number}
     */
    const getKey = pass => {
        let key = 0;
        let sign = 1;
        for (let char of pass) {
            key += (sign * char.charCodeAt(0));
            sign *= (-1);
        }

         if (32 > key) {
             while (32 > key) {
                 key += 32;
             }
         } else if (126 < key) {
             while (126 < key) {
                 key -= 126;
             }
         }
        return key;
    };
    const key = getKey(parts.shift());
    console.log(`Key = ${key}`);

    for (let word of parts) {
        let result = [];
        for (let char of word) {
            result.push((char.charCodeAt(0) * key).toString(16));
        }
        console.log(result.join(","));
    }
});