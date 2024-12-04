class Edificio{
    #calle;
    #numero;
    #codigoPostal;
    #plantas;
    constructor(calle, numero, codigoPostal){
        this.#calle = calle;
        this.#numero = numero;
        this.#codigoPostal = codigoPostal;
        this.#plantas = [];
    }

    set calle(value){
        this.#calle  = value;
    }
    set numero(value){
        this.#numero = value;
    }
    set codigoPostal(value){
        this.#codigoPostal = value;
    }
    set plantas(value){
        this.#plantas = value;
    }
    get calle(){
        return this.#calle;
    }
    get numero(){
        return this.#numero;
    }
    get codigoPostal(){
        return this.#codigoPostal;
    }
    get plantas(){
        return this.#plantas;
    }
    agregarPlantasYPuertas(nPlantas, nPuertas){
        for(let i=0;i<nPlantas;i++){
            let planta = [];
            for(let j=0;j<nPuertas;j++){
                planta.push(null);
            }
            this.#plantas.push(planta);
        }
    }
    agregarPropietario(propietario, planta, puerta){
        this.#plantas[planta][puerta] = propietario;
    }
    getNumeroPlantas(){
        return this.#plantas.length;
    }
}