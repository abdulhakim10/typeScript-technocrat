type PersonType = {
    name: string;
    age: number;
    address: string;
};

type NewType = "name" | "age" | "address"; // manually

type NewTypeUsingKeyOf = keyof PersonType;

// const a: NewType = 'address'
// const b: NewTypeUsingKeyOf = 'age'

function getProperty<X, Y extends keyof X>(obj: X, key: Y){
    obj[key]
};

const property = getProperty({name: "Mr.X", age: 100}, "age")
