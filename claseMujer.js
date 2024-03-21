
class Mujer extends Paciente {
    constructor(dni, nomComplet, edad, peso, estatura, circCintura, circCadera, numEmbarazos) {
        super (dni, nomComplet, edad, peso, estatura, circCintura, circCadera);
        this.numEmbarazos = numEmbarazos;
    }
    
    indexGrasa() {
        let indexGrasa = super.indexGrasa();
        return indexGrasa;
    }
   
    relacionCC(){
        let rCC = super.relacionCC();
        return rCC;
    }
    riesgoSalud(){
        let riesgoSalud = "";
        if(rCC >= 0.82){
            riesgoSalud = "Sí";
        } else {
            riesgoSalud = "No";
        }
        return riesgoSalud;
    }
    
    toString(){
        let mostrar = super.toString();
        mostrar += `\n Número de hélices: ${this.helix}`;
        mostrar += `Circumferencia Cadera: ${this.circCadera}\n`;
        
        mostrar += `\n Distancia: ${this.calcDistancia()}`
        return mostrar;
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
















