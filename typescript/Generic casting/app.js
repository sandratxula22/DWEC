//Genéricos
function identity(arg, arg2) {
    return arg;
}
var str = identity('one', true);
var bool = identity(true, 23);
var num = identity(1, "hola");
var Generic = /** @class */ (function () {
    function Generic() {
        this.items = [];
    }
    return Generic;
}());
var inst = new Generic();
inst.items.push(1);
var inst2 = new Generic();
inst2.items.push("sandra");
var object = {
    name: "John",
};
var item = 1;
