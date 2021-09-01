// helpers
function listaParOImpar(lista) {
    // if(lista % 2 === 0){
    //     return true
    // } else {
    //     return false
    // }
    // Se puede simplificar como por: 
    return(lista % 2 === 0);
}

function promedioCal(lista) {
    

    var sumar = 0;
    lista.forEach (function(elemento){
        sumar = sumar + elemento;
        return sumar 
    });
    
    const promedio = sumar / lista.length;
    
    return promedio
    }

//Calculador de mediana
function medianaSalarios(lista) {
        const mitad = parseInt(lista.length / 2);
        if(listaParOImpar(lista.length)){
            const elemento1 = lista[mitad - 1];
            const elemento2 = lista[mitad];
            const salarioMediana = promedioCal([elemento1, elemento2]);
            return salarioMediana
    
        }else
        {
            const salarioMitad = lista[mitad];
            return salarioMitad
        }
    }
  
// Mediana general  
const salariosMex = mexico.map (function(persona){
    return persona.salary;});

const salariosSort = salariosMex.sort(function(a,b){return a - b});


const medianaGeneral = medianaSalarios(salariosSort);

//mediana del top 10%


const spliceStart = (salariosSort.length * 90) / 100;
const spliceCount = salariosSort.length - spliceStart;
const salarioMex10 = salariosSort.splice(spliceStart,spliceCount);

const medianaGeneralTop = medianaSalarios(salarioMex10);
console.log({
    medianaGeneral,
    medianaGeneralTop,
    
});