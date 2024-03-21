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
        let indexCatPes = -1;
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
        let indexGrasa = -1;
        indexGrasa = 1.2 * Imc + 0.23 * this.edad;
    }









    /*getDni() {return this.#dni}
    getNacionalidad() {return this.#nacionalidad}
    getEdad() {return this.#edad}
    getVuelos() {return this.#vuelos}*/

    // Setters no necesarios

    toString() {
        return `DNI del cliente: ${this.getDni()}\n` +
                `Nacionalidad: ${this.getNacionalidad()}\n`+
                `Edad: ${this.getEdad()}\n`+
                `Vuelos: ${this.getVuelos()}`;
    }
}