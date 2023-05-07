const arrayOfNumbers = [1, 2, 3, 4, 5];
const arrayOfString = arrayOfNumbers.map(number => number.toString());
console.log(arrayOfString);

type AreaString = {
    height: string;
    width: string;
};

type AreaReadOnly = {
    height: number;
    width: number;
};

const rectangularArea: AreaReadOnly = {
    height: 10,
    width: 12
}

type Volume = {
    height: number;
    width: number;
    depth: number;
};

// mapped type
type Area<T> = {
    // [] : type
    // [key in keyof Volume]: Volume[key];
    [key in keyof T]: T[key]; //generic or dynamic
};

const area1 : Area<{height:string, width: number}> = {height: 'Persian', width: 2}

type A = Volume['height'] // look up types
type B = keyof Volume; // 'width' | 'height'