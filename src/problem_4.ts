class Person {
    private _name: string;
    private _age: number

    constructor(name: string, age: number){
        this._name = name;
        this._age = age;
    }

    get name(): string {
        return this._name;
    }

    get age(): number {
        return this._age;
    }

    public getDetails(): string {
         return `Name: ${this._name}, Age: ${this._age}`;
    }
};

class Student extends Person {
    private _grade: number;
    constructor(grade: number) {
        super(sperson.name, sperson.age)
        this._grade = grade;
    }

    public getGrade(): number {
        return this._grade;
    }
}

const sperson = new Person("Rayhan", 12);
console.log(sperson.getDetails());
const grade = new Student(4.5);
console.log(grade.getGrade());