type GenericTuple<X, Y> = [X, Y];

const relation: GenericTuple<string, string> = ["Persian", "Kate"];

// type NameSalary = {name: string, salary: number};

interface NameSalary {
    name: string;
    salary: number
}

const relationWithSalary: GenericTuple<NameSalary, string> = [
    {
        name: "persian",
        salary: 120000
    },
    "Kate"
]

// generic type
type GenericArray<T>= Array<T>

const rollNumbers1: GenericArray<number> = [44, 12, 4];
const rollNumbers2: GenericArray<string> = ['44', '12', '4'];

type NameRollType = {name: string, roll: number}

const userNameAndRollNumbers: GenericArray<NameRollType> = [
    {
    name: "Mr. X",
    roll: 1
},
{
    name: "Mr. Y",
    roll: 2
}
];

