interface IGreat{
    name: string;
    age: number;
};

const arrayOfObj: IGreat[] = [
    {name: "Sharif", age: 24},
    {name: "Tarif", age: 20},
    {name: "Jarif", age: 18},
    {name: "Samad", age: 16},
    {name: "Arif", age: 14},
];

function bigAge(obj: IGreat[]): IGreat[]{
    const arrayOfBigAge = obj.filter(bj => bj.age >= 18);
    return arrayOfBigAge;
}

console.log(bigAge(arrayOfObj));