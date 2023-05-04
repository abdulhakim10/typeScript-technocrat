let emni: any;

emni = 'Next level web development';

(emni as string).length;
<string>emni.length; // this syntax doesn't work on tsx

function kgToGram(param: string | number): string | number | undefined{
    if(typeof param === "string"){
        const value = parseFloat(param)*1000;
        return `The Converted result is ${value}`;
    }
    if(typeof param === "number"){
        const value = param*1000;
        return `The Converted result is ${value}`;
    }
};

const resultToBeNumber =<number>kgToGram(1000);
const resultToBeString =kgToGram(1000) as string;

type CustomErrorType = {
    message: string
}

try{

} catch(e){
    console.log((e as CustomErrorType).message);
}