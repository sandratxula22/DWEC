//funciones
function add(a: number, b: number = 1): number{
    return a + b;
}

let result = add(1, 2);
//tipo Function
//let combinedValues: (a: number, b: number) => number;
let combinedValues: Function;

function sayHello(){
    console.log('Hola');
}

let user = 'Bob';
if(user == 'Pep'){
    combinedValues = add;
}else{
    combinedValues = sayHello;
}

combinedValues(1,2);

//never
function generateError(message: string): never | boolean{
    if(message == 'hola'){
        return true;
    }
    throw new Error(message);
}
const error = generateError('Ops! Ha ocurrido un error');
console.log(error);