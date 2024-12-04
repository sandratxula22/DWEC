class Inmobiliaria{
    #edificios;
    constructor(){
        this.#edificios = [];
    }
    addEdificio(edificio){
        this.#edificios.push(edificio);
    }
    getEdificio(calle, numero){
        return this.#edificios.find(
            edificio => edificio.calle === calle && edificio.numero === numero
        );
    }
    mostrarEdificios(){
        console.log(this.#edificios);
    }
}