// normal function
// default parameter
// always default parameter use in last parameter
function add(num1: number, num2: number = 10): number{
    return num1 + num2;
}

add(3, 3);

// spread operator

const friends = ['Mainul', 'Kutub', 'Ismail'];
const nwFrnd = ['Omayer', 'Qamrul', 'Ameer'];

const nwGdFrnd = {
    fullName: "Abdul Hakim",
    age: 25
}

const [goodFriends] = friends
const {fullName: string} = nwGdFrnd
console.log({string})

friends.push(...nwFrnd);
// console.log(friends)


// rest parameter

const greetFriends = (...friends: string[]): void => friends.forEach((friend) => console.log(`Hi ${friend}`) )

greetFriends('Rayhan', 'nesar', 'Saidul', 'Nuru', 'Jabir');


// array and object destructuring

// arrow function

const addArrow = (num1: number, num2: number): number => num1 + num2;

const arr = [4, 5, 7, 8];

const nwArr = arr.map((elm: number) => elm * elm)


// function into object

const person: {
    name: string;
    balance: number;
    // if something returns use string otherwise use void
    addBalance(money: number): void;
} = {
    name: "Fahim",
    balance: 5,
    addBalance(money: number) {
        // console.log(`My New Balance is ${this.balance + money}`)
    }
}