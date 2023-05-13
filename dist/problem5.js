"use strict";
const stringDetect = (param) => {
    if (typeof param === 'string') {
        console.log('This is a string');
    }
    else {
        function throwError(message) {
            throw new Error(message);
        }
        throwError("Error!!! kindly check again");
    }
};
stringDetect('Rayhan');
// stringDetect(3);
