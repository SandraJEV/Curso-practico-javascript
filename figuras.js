//Cuadrados
function perimetroCuadrado(lado) {
  const perimetro = lado * 4;
  return perimetro;
}

function areaCuadrado(lado) {
  const area = lado * lado;
  return area;
}


// Triangulos
function perimetroTriangulo(lado, lado2, base) {
  const perimetro = lado + lado2 + base;
  return perimetro;
}

function areaTriangulo(base, altura) {
  const area = (base * altura) / 2;
  return area;
}

//Triangulo isoceles
function isosceles(lado1, lado2, base) {
  if (lado1 === lado2 && base !== lado1) {
      // const baseAl = base / 2;
      // const baseMul = baseAl * baseAl;
      // const lado1Al = lado1 * lado1;
      // const altura = Math.sqrt(lado1Al - baseMul);
      const altura = Math.sqrt(Math.pow(lado1,2) - (Math.pow(base,2) / 4))
      return altura
    
  }
  if (lado1 === lado2 && base === lado2) {
    alert("No es un triángulo isósceles, es equilátero");
  } else {
    alert("No es un triángulo isósceles, es escaleno");
  }
}
//circulo

function circunferencia(radio) {
  const diametro = radio + radio;
  const PI = Math.PI;
  const cirTotal = diametro * PI;
  const cirTotalSin = cirTotal.toFixed(4)
  return cirTotalSin;
}
function areaCirculo(radio) {
  const PI = Math.PI;
  const area = radio ** 2 * PI;
  const areaSin = area.toFixed(4)
  return areaSin;
}


//Interacción con html

//Cuadrado
function calculaCuadradoPer() {
  const input = document.getElementById("inputCua");
  const valor = input.value;
  const calculo = perimetroCuadrado(valor);
  const resultadoPerCua = document.getElementById("resultadoPerCua");
  resultadoPerCua.innerText = "El perímetro de tu cuadrado es " + calculo + "cm";
}

function calculaCuadradoArea() {
  const input = document.getElementById("inputCua");
  const valor = input.value;
  const calculo = areaCuadrado(valor);
  
  const resultadoAreCua = document.getElementById("resultadoAreCua");
  resultadoAreCua.innerText = "El área de tu cuadrado es " + calculo + "cm^2" ;
 
}

//Triangulos
function calculaPerimetroTriangulo(){
  const inputL1 = document.getElementById("inputLado1");
  const inputL2 = document.getElementById("inputLado2");
  const inputB = document.getElementById("inputBase");
  const valorL1 = Number(inputL1.value);
  const valorL2 = Number(inputL2.value);
  const valorB = Number(inputB.value);
  const calculo = perimetroTriangulo(valorL1, valorL2, valorB);
  const resultadoPerTrian = document.getElementById("resultadoPerTrian");
  resultadoPerTrian.innerText = "El perímetro de tu triángulo es " + calculo + "cm";
}

function calculaAreaTriangulo(){
  const inputAltura = document.getElementById("inputAltura");
  const inputB = document.getElementById("inputBase");
  const valorAltura = Number(inputAltura.value);
  const valorB = Number(inputB.value);
  const calculo = areaTriangulo(valorB, valorAltura);
  const resultadoAreTrian = document.getElementById("resultadoAreTrian");
  resultadoAreTrian.innerText = "El área de tu triángulo es " + calculo + "cm^2";
}

function calculaAlturaIsosceles(){
  const inputL1 = document.getElementById("inputLado1");
  const inputL2 = document.getElementById("inputLado2");
  const inputB = document.getElementById("inputBase");
  const valorL1 = Number(inputL1.value);
  const valorL2 = Number(inputL2.value);
  const valorB = Number(inputB.value);
  const calculo = isosceles(valorL1, valorL2, valorB);
  const resultadoAltura = document.getElementById("resultadoAltura");
  resultadoAltura.innerText = "La altura de tu triángulo isósceles es " + calculo + "cm";
}

//Círculo

function calculaCirculoPer() {
  const input = document.getElementById("inputCir");
  const valor = Number(input.value);
  const calculo = circunferencia(valor);
  const resultadoPerCir = document.getElementById("resultadoPerCir");
  resultadoPerCir.innerText = "La circunferencia de tu círculo es " + calculo + "cm";
}

function calculaCirculoArea() {
  const input = document.getElementById("inputCir");
  const valor = Number(input.value);
  const calculo = areaCirculo(valor);
  const resultadoAreCir = document.getElementById("resultadoAreCir");
  resultadoAreCir.innerText = "El área de tu círculo es " + calculo + "cm^2";
}

