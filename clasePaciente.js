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
        let imc = (this.peso/ (this.estatura*this.estatura)).toFixed(3);
        console.log("IMC: ", imc);
        return imc;
    }

    indexCatPes(){
        let imc = this.indexImc();
        let indexCatPes = 0;
        if(imc < 18.5){
            indexCatPes = 1;
        } else if (imc < 25){
            indexCatPes = 2;
        }else if (imc < 30){
            indexCatPes = 3;
        }else {
            indexCatPes = 4;
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