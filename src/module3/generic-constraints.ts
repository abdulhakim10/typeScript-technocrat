// Arrow Function

const createArray = (param: string): string[] => {
    return [param]
};
const createArray1 = <X, Y>(param1: X, param2: Y): [X, Y] => {
    return [param1, param2]
};

// normal function
function createArray2 <X, Y>(param1: X, param2: Y): [X, Y] {
    return [param1, param2]
};

const result1 = createArray1<string, string>("Bangladesh", "MY Country");
const result2 = createArray1<boolean, string>(true, "hacha");

interface NameObject{
    name: string;
}

const result3 = createArray1<NameObject, NameObject>({name: "bd"}, {name: "MC"});

// Spread Operator

// const crush = "Kate Winslet"


// const nwData = {...myInfo, crush};


type ExtendsType = {name: string, age: number, salary: number}

const addMeinMyCrushMind = <T extends ExtendsType>(myInfo: T) => {
    const crush = "Kate winslet"
    const nwData = {...myInfo, crush}
    return nwData
}

type MyInfoType = {
    name: string;
    age: number;
    salary: number;
}

const myInfo: MyInfoType = {
    name: "Persian",
    age: 29,
    salary: 1000000
};

const result5 = addMeinMyCrushMind({name: "tuasr", age: 25, salary: 24848});