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
        let Imc = peso/ (estatura*estatura);
        console.log("IMC: ", Imc);
        return Imc;
    }

    indexCatPes(){
        let indexCatPes = 0;
        if(Imc < 18.5){
            indexCatPes = 1;
        } else if (Imc < 25){
            indexCatPes = 2;
        }else if (Imc < 30){
            indexCatPes = 3;
        }else {
            indexCatPes = 4;
        }
        return indexCatPes;
    }

    indexGrasa(){
        let indexGrasa = 0;
        indexGrasa = 1.2 * Imc + 0.23 * this.edad;
    }

    relacionCC(){
        let rCC = 0;
        rCC = this.circCintura / this.circCadera;
    }


    toString() {
        let mostrar = `DNI del paciente: ${this.dni}\n` +
                `nombre Completo: ${this.nomComplet}\n`+
                `Edad: ${this.edad}\n`+
                `Peso: ${this.peso}`+
                `Estatura: ${this.estatura}\n`+
                `Circumferencia Cintura: ${this.circCintura}\n`+
                `Circumferencia Cadera: ${this.circCadera}\n`+
                `El/la paciente ${this.nomComplet} tiene un IMC de ${this.circCadera}\n su categoría de peso es: ${this.indexCatPes}`;
    return mostrar;
    }
}