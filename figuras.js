//Cuadrados
function perimetroCuadrado(lado) {
  const perimetro = lado * 4;
  return perimetro;
}

function areaCuadrado(lado) {
  const area = lado * lado;
  console.log("El area del cuadrado es: " + area);
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
    alert("No es un triangulo isosceles, es equilatero");
  } else {
    alert("No es un triangulo isosceles");
  }
}
//circulo

function circunferencia(radio) {
  const diametro = radio + radio;
  const PI = Math.PI;
  const cirTotal = diametro * PI;
  return cirTotal;
}
function areaCirculo(radio) {
  const PI = Math.PI;
  const area = radio ** 2 * PI;
  return area;
}
