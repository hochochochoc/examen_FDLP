
class Mujer extends Paciente {
    constructor(dni, nomComplet, edad, peso, estatura, circCintura, circCadera, numEmbarazos) {
        super (dni, nomComplet, edad, peso, estatura, circCintura, circCadera);
        this.numEmbarazos = numEmbarazos;
    }
    
    indexGrasa() {
        let indexGrasa = (super.indexGrasa());
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
        mostrar += `\nNúmero de embarazos: ${this.numEmbarazos}`;
        mostrar += `\nIndex Grasa: ${this.indexGrasa()}`;
        mostrar += `\nRCC: ${this.relacionCC()}`;
        mostrar += `\nRiesgo Salud: ${this.riesgoSalud()}`;
    
        return mostrar;
    }

}

