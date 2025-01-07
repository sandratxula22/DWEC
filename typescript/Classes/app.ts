//interface
interface IPerson{
    gender: string;
    sayHello: () => void;
}

interface IPersonSayCiao {
    sayCiao: () => void;
}
//class
class Person implements IPerson, IPersonSayCiao{
    public gender: string;
    public color: string;
    static age= 20;
    readonly activities: string[];
    constructor(gender: string, color: string){
        this.gender = gender;
        this.color = color;
        this.activities = ['Sports'];
    }

    public sayHello(){
        console.log("Hola soy "+this.gender);
    }

    static sayBye(){
        console.log("Adiós");
    }

    public sayCiao(){
        console.log("Ciao");
    }

    setGender(gender: string){
        this.gender = gender;
    }

    getGender(){
        return this.gender;
    }
}

class Developer extends Person{
    languages: string[];
    constructor(gender: string, color: string, languages: string[]){
        super(gender, color);
        this.languages = languages;
    }

    public sayHello(){
        super.sayHello();
        console.log("Hola2 soy"+this.gender);
    }
}

const person = new Person('male', 'blue');
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
const dev = new Developer('male', 'red', ['Typescript']);
person.sayHello();
dev.sayHello();