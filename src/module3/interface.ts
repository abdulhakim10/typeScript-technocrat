// generally alias used for primitive type data
type User = {
    name: string;
    age: number
};

type ExtendedUser = User & {
    role: string;
}

const userWithTypeAlias: ExtendedUser = {
    name: "Alice",
    age: 100,
    role: "unknown"
}

// generally interface used for object type data
interface IUser {
    name: string;
    age: number;
};

interface IExtendedUser extends IUser {
    role: string;
};

type rollNumber = number;

// function signature written on alias type
type AddNumbersType = (num1: number, num2: number) => number;

// function signature written on interface
interface IAddNumbers {
    (num1: number, num2: number): number;
}

type rollNumberType = number[];
interface IRollNumber{
    [index: number]: string;
}

const rollNumber: IRollNumber = ['1', '2', '3'];

const addNumbers: AddNumbersType = (num1, num2) => num1 + num2;

const userWithTypeInterface: IExtendedUser = {
    name: "Arman",
    age: 24,
    role: "Poita"
};


