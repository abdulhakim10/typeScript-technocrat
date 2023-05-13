"use strict";
const crush1 = {
    name: 'Moyna Pakhi',
    age: 20,
    proffession: 'Designer',
    address: 'uganda'
};
const crush2 = {
    name: 'Tia Pakhi',
    proffession: 'next level designer',
    address: 'mexico'
};
const isCrushMarried = false;
const courseName = 'Next Level Web Development';
const calculate = (number1, //10
number2, //20
operation //(x, y) => x + y (10, 20) => 10 + 20
) => {
    return operation(number1, number2);
};
calculate(10, 20, (x, y) => x + y);
calculate(10, 20, (x, y) => x - y);
calculate(10, 20, (x, y) => x * y);
