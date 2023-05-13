"use strict";
// nullable types
const searchName = (value) => {
    if (value === null) {
        console.log("There is nothing to search.");
    }
    else {
        console.log("Searching...");
    }
};
searchName(null);
// unknown type
const getCarSpeed = (speed) => {
    if (typeof speed === "number") {
        const convertedSpeed = (speed * 1000) / 3600;
        console.log(`Car speed is ${convertedSpeed}`);
    }
    if (typeof speed === "string") {
        const [value, unit] = speed.split(" "); //["10", "kmh^-1"]
        const convertedSpeed = (parseFloat(value) * 1000) / 3600;
        console.log(`Car speed is ${convertedSpeed}`);
    }
};
getCarSpeed(10);
getCarSpeed("10 kmh^-1");
// never type
// there is nothing to return
function throwError(message) {
    throw new Error(message);
}
throwError("Error Hoyeche");
