const pacientes = [
    new Hombre("1", "Jannik Riegel", 26, 71, 190, 85, 76), 
    new Hombre("2", "José Riegel", 26, 71, 190, 40, 30), 
    new Hombre ("3", "Juan Riegel", 26, 71, 190, 40, 30),
    new Mujer ("4", "Jazmín Riegel", 26, 71, 190, 40, 30, 1),
    new Mujer ("5", "Juanita Riegel", 26, 71, 190, 40, 30, 0)
    
]

function calcular(){
    let dni = prompt("Indica el DNI del paciente buscado:");
    let index = pacientes.findIndex(edificios => edificios.dni === dni);
    
    if (index === -1) { // Si no existe
        alert("Nombre no válido.")
    } else {
        let paciente = pacientes[index];
        
        alert(paciente.toString()); 
    }
}

function imc() {
    let dni = prompt("Indica el DNI del paciente buscado:");
    let index = pacientes.findIndex(edificios => edificios.dni === dni);
    
    if (index === -1) { // Si no existe
        alert("Nombre no válido.")
    } else {
        let paciente = pacientes[index];
        
        alert(`DNI del paciente: ${paciente.dni}\nNombre Completo: ${paciente.nomComplet}\nIMC: ${paciente.indexImc()}\nCategoría de peso: ${paciente.indexCatPes()}`);
    }
}

function indexGrasa() {
    let dni = prompt("Indica el DNI del paciente buscado:");
    let index = pacientes.findIndex(edificios => edificios.dni === dni);
    
    if (index === -1) { // Si no existe
        alert("Nombre no válido.")
    } else {
        let paciente = pacientes[index];
        
        alert(`DNI del paciente: ${paciente.dni}\nNombre Completo: ${paciente.nomComplet}\nÍndice de Grasa: ${paciente.indexGrasa()}`);
    }
}
  
function rcc() {
    let dni = prompt("Indica el DNI del paciente buscado:");
    let index = pacientes.findIndex(edificios => edificios.dni === dni);
    
    if (index === -1) { // Si no existe
        alert("Nombre no válido.")
    } else {
        let paciente = pacientes[index];
        
        alert(`DNI del paciente: ${paciente.dni}\nNombre Completo: ${paciente.nomComplet}\nRelación Cintura-Cadera: ${paciente.relacionCC()}`);
    }
}
    