"use strict";
// normal function
// default parameter
// always default parameter use in last parameter
function add(num1, num2 = 10) {
    return num1 + num2;
}
add(3, 3);
// spread operator
const friends = ['Mainul', 'Kutub', 'Ismail'];
const nwFrnd = ['Omayer', 'Qamrul', 'Ameer'];
const nwGdFrnd = {
    fullName: "Abdul Hakim",
    age: 25
};
const [goodFriends] = friends;
const { fullName: string } = nwGdFrnd;
console.log({ string });
friends.push(...nwFrnd);
// console.log(friends)
// rest parameter
const greetFriends = (...friends) => friends.forEach((friend) => console.log(`Hi ${friend}`));
greetFriends('Rayhan', 'nesar', 'Saidul', 'Nuru', 'Jabir');
// array and object destructuring
// arrow function
const addArrow = (num1, num2) => num1 + num2;
const arr = [4, 5, 7, 8];
const nwArr = arr.map((elm) => elm * elm);
// function into object
const person = {
    name: "Fahim",
    balance: 5,
    addBalance(money) {
        // console.log(`My New Balance is ${this.balance + money}`)
    }
};
