//Optional chaining
//const user = {};
//if(user?.address?.street?.name === 'Palaza España'){
//    domSomething();
//}
//nullable
function f(stringOrNull) {
    //if(stringOrNull === null){
    //    return 'default';
    //}
    //
    return stringOrNull !== null && stringOrNull !== void 0 ? stringOrNull : 'default';
}
var result = f(null);
console.log(result);
var result2 = f('Hola');
console.log(result2);
