class Paciente {
    

    constructor(dni, nomComplet, edad, peso, estatura, circCintura, circCadera){
        this.dni = dni;
        this.nomComplet = nomComplet;
        this.edad = edad;
        this.peso = peso;
        this.estatura = estatura;
        this.circCintura = circCintura;
        this.circCadera = circCadera;
    }
    
    


    indexImc(){
        let imc = (this.peso/ (this.estatura*this.estatura));
        console.log("IMC: ", imc);
        return imc;
    }

    indexCatPes(){
        let imc = this.indexImc();
        let indexCatPes = "";
        if(imc < 18.5){
            indexCatPes = "peso insuficiente";
        } else if (imc < 25){
            indexCatPes = "peso normal";
        }else if (imc < 30){
            indexCatPes = "sobrepeso";
        }else {
            indexCatPes = "obesidad";
        }
        return indexCatPes;
    }

    indexGrasa(){
        let imc = this.indexImc();
        let indexGrasa = 0;
        indexGrasa = (1.2 * imc + 0.23 * this.edad).toFixed(2);
        return indexGrasa;
    }

    relacionCC(){
        let rCC = 0;
        rCC = (this.circCintura / this.circCadera).toFixed(2);
        return rCC;
    }


    toString() {
        let mostrar = `DNI del paciente: ${this.dni}\n` +
                `nombre Completo: ${this.nomComplet}\n`+
                `Edad: ${this.edad}\n`+
                `Peso: ${this.peso}\n`+
                `Estatura: ${this.estatura}\n`+
                `Circumferencia Cintura: ${this.circCintura}\n`+
                `Circumferencia Cadera: ${this.circCadera}\n`+
                `El/la paciente ${this.nomComplet} tiene un IMC de ${this.indexImc()}\nsu categoría de peso es: ${this.indexCatPes()}`;
    return mostrar;
    }
}