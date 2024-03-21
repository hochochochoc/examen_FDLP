// array global
const n = [];

// largo de array
function calcular(){
    let largoArray = parseInt(document.getElementById("largoArray").value);
    
    if(largoArray >= 10 && largoArray <= 30) {
        for (let i = 0; i < largoArray; i++) {
            let numRandom = Math.floor(Math.random()*60) + 1;
            n.push(numRandom);
        }
        // generar array en consola:
        console.log(n);

        // percentajes:
        let primerTercio = 0;
        let segundoTercio = 0;
        let ultimoTercio = 0;

        for (i=0; i<largoArray; i++){
            if (n[i] < 21){
                primerTercio++;
            }
            else if (n[i] < 41) {
                segundoTercio++;
            }
            else {
                ultimoTercio++;
            }
        }

        let percentaje1 = (primerTercio / largoArray *100).toFixed(2);
        let percentaje2 = (segundoTercio / largoArray *100).toFixed(2);
        let percentaje3 = (ultimoTercio / largoArray *100).toFixed(2);

        document.getElementById("mensaje1").innerHTML = "Tamaño del array: " + largoArray;
        document.getElementById("mensaje2").innerHTML = "% de números entre 1 y 20: "+ primerTercio + " = "  + percentaje1;
        document.getElementById("mensaje3").innerHTML = "% de números entre 21 y 40: " + segundoTercio + " = " + percentaje2;
        document.getElementById("mensaje4").innerHTML = "% de números entre 41 y 60: " + ultimoTercio + " = " + percentaje3;



    } else {
        alert("Error: el número debe estar entre 10 y 30.")
    }

}
