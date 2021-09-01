var lista1 = [1,3,5,5,6,76,788];
alert('ho');
function promedioCal(lista) {
    

    var sumar = 0;
    lista.forEach (function(elemento){
        sumar = sumar + elemento;
        return sumar 
    });
    
    const promedio = sumar / lista.length;
    
    return promedio
    }


function calculaMediana(lista) {
    
    const mitad = parseInt(lista.length / 2);
    
    
    
    function ParOImpar(lista) {
        if(lista % 2 === 0){
        return true
        } else {
            return false
        }
    }
    
    let mediana = 0;
    if (ParOImpar(lista.length)){
        const elemento1 = lista[mitad - 1];
        const elemento2 = lista[mitad];
        mediana = promedioCal([elemento1,elemento2]);
        return mediana
    }else {
        mediana = lista[mitad];
    }
    return mediana
}
console.log(calculaMediana([1,3,5,5,6,6,76,788]));