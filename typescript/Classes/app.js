var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//class
var Person = /** @class */ (function () {
    function Person(gender, color) {
        this.gender = gender;
        this.color = color;
        this.activities = ['Sports'];
    }
    Person.prototype.sayHello = function () {
        console.log("Hola soy " + this.gender);
    };
    Person.sayBye = function () {
        console.log("Adiós");
    };
    Person.prototype.sayCiao = function () {
        console.log("Ciao");
    };
    Person.prototype.setGender = function (gender) {
        this.gender = gender;
    };
    Person.prototype.getGender = function () {
        return this.gender;
    };
    Person.age = 20;
    return Person;
}());
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer(gender, color, languages) {
        var _this = _super.call(this, gender, color) || this;
        _this.languages = languages;
        return _this;
    }
    Developer.prototype.sayHello = function () {
        _super.prototype.sayHello.call(this);
        console.log("Hola2 soy" + this.gender);
    };
    return Developer;
}(Person));
var person = new Person('male', 'blue');
//establecer siendo público
person.color = 'orange';
//establecer siendo privado
person.setGender('female');
console.log(person.getGender()); //female
//static
console.log(Person.age);
Person.sayBye();
//reradonly
console.log(person.activities);
//herencia
var dev = new Developer('male', 'red', ['Typescript']);
person.sayHello();
dev.sayHello();
