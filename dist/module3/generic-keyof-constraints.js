"use strict";
// const a: NewType = 'address'
// const b: NewTypeUsingKeyOf = 'age'
function getProperty(obj, key) {
    obj[key];
}
;
const property = getProperty({ name: "Mr.X", age: 100 }, "age");
