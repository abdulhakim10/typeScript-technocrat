// ternary operator

const age: number = 22;

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
const userName = isAuthenticateUser ?? "Guest";
const userName2 = isAuthenticateUser ? isAuthenticateUser : "Guest";
console.log({userName}, {userName2});


type Manush = {
    name: string;
    age: number;
    address:{
        city: "No City",
        road: "No Road",
        home?: "";
    }
}

const manush1: Manush = {
    name: "Manush",
    age: 100,
    address:{
        city: "No City",
        road: "No Road"
    },
}

const home = manush1?.address?.home ?? "No Home"; //default "No Home";
console.log({home})