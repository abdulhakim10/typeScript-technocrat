// Pick

interface Person {
    name: string;
    email?: string;
    contactNo: string;
}

type contact = Pick<Person, 'contactNo' | 'email'>;

// Omit 

type Name = Omit<Person, 'email' | 'contactNo'>

// Partial and Required
// To make add properties be optional type

type Optional = Partial<Person>;
type RequiredProps = Required<Person>;

// Read Only

const person: Readonly<Person> = {
    name: "Persian",
    email: 'ac@gmail.com',
    contactNo: '8990949'
};

person.name =  'paalka'

// type MyObj = {
//     a: string;
//     b: string;
//     c: string;
// }

// Index signature

// type MyObj ={
//     [key: string]: string;
// }

// Record

// type MyObj = Record<string, string>;
type MyObj = Record<'a' | 'b' | 'c', string>; // using literal type "a"

const obj: MyObj = {
    a: '1',
    b: '2',
    c: '3',
}