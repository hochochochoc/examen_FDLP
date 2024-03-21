
class Hombre extends Paciente {
    constructor(dni, nomComplet, edad, peso, estatura, circCintura, circCadera, numEmbarazos) {
        super (dni, nomComplet, edad, peso, estatura, circCintura, circCadera);
       
    }
    
    indexGrasa() {
        let indexGrasa = (super.indexGrasa()-5.4).toFixed(2);
        return indexGrasa;
    }
   
    relacionCC(){
        let rCC = super.relacionCC();
        return rCC;
    }
    riesgoSalud(){
        let rCC = this.relacionCC();
        let riesgoSalud = "";
        if(rCC >= 0.95){
            riesgoSalud = "Sí";
        } else {
            riesgoSalud = "No";
        }
        return riesgoSalud;
    }
    
  

    toString() {
        let mostrar = super.toString();
        mostrar += `\nIndex Grasa: ${this.indexGrasa()}`;
        mostrar += `\nRCC: ${this.relacionCC()}`;
        mostrar += `\nRiesgo Salud: ${this.riesgoSalud()}`;
    
        return mostrar;
    }

}
