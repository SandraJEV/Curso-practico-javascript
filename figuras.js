// Código del cuadrado
console.group("Cuadrados");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado);

const perimetroCuadrado = ladoCuadrado * 4;
// PC = L + L + L + l
console.log("El perimetro del cuadrado es: " + perimetroCuadrado + " cm");
const areaCuadrado = ladoCuadrado * ladoCuadrado;
// AC = l al cuadrado
console.log("El área del cuadrado es: " + areaCuadrado + " cm^2");
console.groupEnd();

// Código del triángulo
console.group("Triángulo");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log(
  "Los lados del triangulo miden " +
    ladoTriangulo1 +
    " cm," +
    ladoTriangulo2 +
    " cm, " +
    baseTriangulo +
    " cm"
);

const alturaTriangulo = 5.5;
console.log("La altura del triángulo mide " + alturaTriangulo + " cm"); 

const perimetroTrian = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del triángulo es " + perimetroTrian + " cm");

const areaTrian = (baseTriangulo * alturaTriangulo) / 2;  
console.log("El área del triángulo es: " + areaTrian + " cm^2");

console.groupEnd();

// Código círculo
console.group("Círculo");

// Radio 
const radioCir = 4;
console.log("El radio del círculo es : " + radioCir + " cm");

// Diámetro
const diametroCir = radioCir * 2;
console.log("El diámetro del círculo es : " + diametroCir + " cm");
//Pi
const PI = Math.PI;
console.log("PI equivale a:" + PI);
//Circuferencia
const perimetroCir= diametroCir * PI;
console.log("El perímetro del círculo es : " + perimetroCir + " cm");

//Area 
const areaCirc = (radioCir * radioCir) * PI;
console.log("El área del círculo es : " + areaCirc + " cm^2");


console.groupEnd();