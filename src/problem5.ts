const stringDetect = (param: unknown): void => {
    if(typeof param === 'string'){
        console.log('This is a string');
    }
    else{
        function throwError(message: string): never {
            throw new Error(message)

        }
        throwError("Error!!! kindly check again");
    }
}

stringDetect('Rayhan');
// stringDetect(3);

