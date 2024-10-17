class Persona{
    constructor(nombre){
        this.nombre = nombre;
    }

    set nombre(value){
        this._nombre = value;
    }

    get nombre(){
        return this._nombre;
    }

    saludar(){
        return "Hola soy "+this.nombre;
    }

    //this no existe en static
    static comparar(pA, pB){
        return pA.nombre.localeCompare(pB.nombre);
    }
}

const a = [new Persona('Santi'), new Persona('Juan')];
console.log(Persona.comparar(a[0], a[1]));
a.sort(Persona.comparar);
console.log(Persona.comparar(a[0], a[1]));

class Programador extends Persona {
    constructor(nombre, lenguaje){
        super(nombre);
        this.lenguaje = lenguaje;
    }

    saludar(){
        return super.saludar()+ " y programo en " + this.lenguaje;
    }
}

let p1 = new Programador("Sandra", "JavaScript");
console.log(p1.saludar());

