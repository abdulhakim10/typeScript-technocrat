// Properties

interface Model<TData, TMethods>{
    data: TData;
    methods: TMethods;
};

interface EUser  {
    firstName: string;
    lastName: string;
};

// Methods

interface IMethods {
    fullName(): string;
};

type model = Model<EUser, IMethods>;

class User1 implements model{
    data: EUser;
    methods: IMethods;

    constructor(firstName: string, lastName: string){
        // this.data = { firstName, lastName };
        this.data = {firstName, lastName} ;
        this.methods= {
            fullName: () => `${firstName} ${lastName}`
        }
    }
}

const user1 = new User1('mesba', 'persian');
console.log(user1.methods.fullName());