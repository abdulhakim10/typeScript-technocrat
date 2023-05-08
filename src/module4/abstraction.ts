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

abstract class Vehicle {
        constructor(
            public name: string,
            public brand: string,
            public model: number
        ){}
    
        abstract startEngine(): void;
        abstract stopEngin(): void;
        move(): void {
            console.log("I'm moving engine");
        }
    }

    class Car extends Vehicle {
        startEngine(): void {
            console.log("I'm starting engine");
        }
        stopEngin(): void {
            console.log("I'm stop engine");
        }
    }

    // const car1 = new Vehicle('Car', 'Honda', 2012)