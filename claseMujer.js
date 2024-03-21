
class Mujer extends Paciente {
    constructor(dni, nomComplet, edad, peso, estatura, circCintura, circCadera, numEmbarazos) {
        super (dni, nomComplet, edad, peso, estatura, circCintura, circCadera);
        this.numEmbarazos = numEmbarazos;
    }
    
    indexGrasa() {
        let indexGrasa = (super.indexGrasa()).toFixed(2);
        return indexGrasa;
    }
   
    relacionCC(){
        let rCC = super.relacionCC();
        return rCC;
    }
    riesgoSalud(){
        let rCC = this.relacionCC();
        let riesgoSalud = "";
        if(rCC >= 0.82){
            riesgoSalud = "Sí";
        } else {
            riesgoSalud = "No";
        }
        return riesgoSalud;
    }
   

    toString() {
        let mostrar = super.toString();
        mostrar += `\n Número de embarazos: ${this.numEmbarazos}`;
        mostrar += `\n Index Grasa: ${this.indexGrasa()}`;
        mostrar += `\n RCC: ${this.relacionCC()}`;
        mostrar += `\n Riesgo Salud: ${this.riesgoSalud()}`;
    
        return mostrar;
    }

}

