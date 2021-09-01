

function calculaPromedio(lista) {
    
    var sumar = 0;
    lista.forEach(function(elemento) {
    sumar = sumar + elemento;
    return sumar
    });
    
    const promedio = sumar / lista.length;
    return promedio
}
console.log(calculaPromedio([1,2,3,4,5,6,5,6]));