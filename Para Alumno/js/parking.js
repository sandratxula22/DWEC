class Parking {
    constructor(numMaxCoches, costeMinuto){
        this._costeMinuto = costeMinuto;
        this._numMaxCoches = numMaxCoches;
        this._coches = [];
        this._accesos = new Map();
    }

    get cochesAparcados(){
        return this._coches;
    }

    get numeroCoches(){
        return this._coches.length;
    }

    get getaccesos(){
        return this._accesos;
    }

    actualizarImporte(){
        let importeMin = document.querySelector("#importeMinuto");
        importeMin.innerHTML = this._costeMinuto + "€/min";
    }

    addCoche(coche1){
        if(this._coches.length < this._numMaxCoches){
            this._coches.push(coche1);
            return true;
        }else{
            return false;
        }
    }

    calcularImporte(fechaEntrada, fechaSalida){
        let dif = fechaSalida - fechaEntrada;
        return dif.getMinutes() * this._costeMinuto;
    }
}