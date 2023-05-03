type CrushType = {
    name: string;
    age?: number;
    proffession: string;
    address: string;
}

const crush1: CrushType = {
    name: 'Moyna Pakhi',
    age: 20,
    proffession: 'Designer',
    address: 'uganda'
};

const crush2: CrushType = {
    name: 'Tia Pakhi',
    proffession: 'next level designer',
    address: 'mexico'
};

type CrushMarriedType = boolean;
const isCrushMarried: CrushMarriedType = false;

type CourseNameType = string;
const courseName: CourseNameType = 'Next Level Web Development'

type OperationType = (x: number, y: number) => number;

const calculate = (
    number1: number, //10
    number2: number, //20
    operation: OperationType //(x, y) => x + y (10, 20) => 10 + 20
    ) => {
    return operation(number1, number2);
}

calculate(10, 20, (x, y) => x + y);
calculate(10, 20, (x, y) => x - y);
calculate(10, 20, (x, y) => x * y);