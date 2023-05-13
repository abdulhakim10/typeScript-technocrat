"use strict";
class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
    get name() {
        return this._name;
    }
    get age() {
        return this._age;
    }
    getDetails() {
        return `Name: ${this._name}, Age: ${this._age}`;
    }
}
;
class Student extends Person {
    constructor(grade) {
        super(sperson.name, sperson.age);
        this._grade = grade;
    }
    getGrade() {
        return this._grade;
    }
}
const sperson = new Person("Rayhan", 12);
console.log(sperson.getDetails());
const grade = new Student(4.5);
console.log(grade.getGrade());
