"use strict";
// // interface
// // interface IVehicle {
// //     name: string;
// //     model: string;
// // }
// // const vehicle: IVehicle = {
// //     name: "car",
// //     model: "3999"
// // }
// interface IVehicle{
//     startEngine(): void;
//     stopEngin(): void;
//     move(): void;
// }
// class Vehicle implements IVehicle {
//     constructor(
//         public name: string,
//         public brand: string,
//         public model: number
//     ){}
//     startEngine(): void {
//         console.log('I am starting engin')
//     }
//     stopEngin(): void {
//         console.log('I am stop engin')
//     }
//     move(): void {
//         console.log('I am moving engin')
//     }
//     test() {
//         console.log('I am for testing purpose')
//     }
// }
// const vehicle1 = new Vehicle("car", "toyota", 456);
// abstract class
class Vehicle {
    constructor(name, brand, model) {
        this.name = name;
        this.brand = brand;
        this.model = model;
    }
    move() {
        console.log("I'm moving engine");
    }
}
class Car extends Vehicle {
    startEngine() {
        console.log("I'm starting engine");
    }
    stopEngin() {
        console.log("I'm stop engine");
    }
}
// const car1 = new Vehicle('Car', 'Honda', 2012)
