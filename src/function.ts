// normal function

function add(num1: number, num2: number): number{
    return num1 + num2;
}

add(3, 3);

// arrow function

const addArrow = (num1: number, num2: number): number => num1 + num2;

const arr = [4, 5, 7, 8];

const nwArr = arr.map((elm: number) => elm * elm)


// function into object

const person: {
    name: string;
    balance: number;
    addBalance(money: number): void;
} = {
    name: "Fahim",
    balance: 5,
    addBalance(money: number) {
        console.log(`My New Balance is ${this.balance + money}`)
    }
}