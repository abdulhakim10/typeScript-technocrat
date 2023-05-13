import { add1 as add2, subtract } from "./module";

const add1 = (param1: number, param2: number, param3: number): number => {
    return param1 + param2 + param3;
};

const res = add2(4,6);