"use strict";
// ternary operator
var _a, _b;
const age = 22;
// if(age >= 18) {
//     console.log("Yes");
// }
// else {
//     console.log("No");
// }
const isAdult = age >= 18 ? "Yes" : "No";
console.log(isAdult);
// Nullish coalescing operator
// Only use for Null and Undefined
const isAuthenticateUser = '';
const userName = isAuthenticateUser !== null && isAuthenticateUser !== void 0 ? isAuthenticateUser : "Guest";
const userName2 = isAuthenticateUser ? isAuthenticateUser : "Guest";
console.log({ userName }, { userName2 });
const manush1 = {
    name: "Manush",
    age: 100,
    address: {
        city: "No City",
        road: "No Road"
    },
};
const home = (_b = (_a = manush1 === null || manush1 === void 0 ? void 0 : manush1.address) === null || _a === void 0 ? void 0 : _a.home) !== null && _b !== void 0 ? _b : "No Home"; //default "No Home";
console.log({ home });
