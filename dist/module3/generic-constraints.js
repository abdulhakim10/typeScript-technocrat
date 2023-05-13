"use strict";
// Arrow Function
const createArray = (param) => {
    return [param];
};
const createArray1 = (param1, param2) => {
    return [param1, param2];
};
// normal function
function createArray2(param1, param2) {
    return [param1, param2];
}
;
const result1 = createArray1("Bangladesh", "MY Country");
const result2 = createArray1(true, "hacha");
const result3 = createArray1({ name: "bd" }, { name: "MC" });
const addMeinMyCrushMind = (myInfo) => {
    const crush = "Kate winslet";
    const nwData = Object.assign(Object.assign({}, myInfo), { crush });
    return nwData;
};
const myInfo = {
    name: "Persian",
    age: 29,
    salary: 1000000
};
const result5 = addMeinMyCrushMind({ name: "tuasr", age: 25, salary: 24848 });
