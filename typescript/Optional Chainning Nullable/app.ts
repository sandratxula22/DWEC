//Optional chaining
//const user = {};
//if(user?.address?.street?.name === 'Palaza España'){
//    domSomething();
//}

//nullable
function f(stringOrNull: string | null): string{
    //if(stringOrNull === null){
    //    return 'default';
    //}
//
    return stringOrNull ?? 'default';
}

const result = f(null);
console.log(result);
const result2 = f('Hola');
console.log(result2);