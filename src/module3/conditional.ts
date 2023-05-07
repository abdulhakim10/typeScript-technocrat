// // a type is dependent on another type

// type a1 = null;
// type a3 = undefined;
// type a4 = number;

// type a2 = a1 extends string ? string : null;
// // nested conditional type
// type d = a1 extends null ? null : a3 extends number ? number : a4 extends null ? null : never;

// type Sheikh = {
// wife1: string;
// wife2: string;
// wife3: string;
// };

// type CheckProperty<T, K> = K extends keyof Sheikh ? true : false;

// type CheckWife1 = CheckProperty<Sheikh, 'gf'>;


// type Bandhobi = "Mahima" | "Mahiya" | "Sara"

// type RemoveBandhobi<T,K> = T extends K ? never : T;

// type CurrentBandhobi = RemoveBandhobi<Bandhobi, "Mahima">