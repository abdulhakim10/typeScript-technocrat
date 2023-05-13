"use strict";
let emni;
emni = 'Next level web development';
emni.length;
emni.length; // this syntax doesn't work on tsx
function kgToGram(param) {
    if (typeof param === "string") {
        const value = parseFloat(param) * 1000;
        return `The Converted result is ${value}`;
    }
    if (typeof param === "number") {
        const value = param * 1000;
        return `The Converted result is ${value}`;
    }
}
;
const resultToBeNumber = kgToGram(1000);
const resultToBeString = kgToGram(1000);
try {
}
catch (e) {
    console.log(e.message);
}
