function precioFinal(precio, descuento) {
  const calculo = (precio * (100 - descuento)) / 100;
  return calculo;
}

const cupones = [
  "Primera compra",
  "Cliente frecuente",
  "Pagas menos",
  "Sorpresa",
];

let descuento;
if (cupones === "Primera compra") {
  descuento = 50;
}
if (cupones === "Cliente frecuente") {
  descuento = 15;
}
if (cupones === "Pagas menos") {
  descuento = 33;
}
if (descuento === "Sorpresa") {
  descuento = 80;
}


function yaPrecio(){
  const inputPrecio = document.getElementById("inputPrecio");
  const inputDescuento = document.getElementById("inputDescuento");
  const valorPrecio = inputPrecio.value;
  const valorDescuento = inputDescuento.value;
  const resultado = precioFinal(valorPrecio, valorDescuento);
  const resultadoPrecio = document.getElementById("resultadoPrecio")
  resultadoPrecio.innerText = "El precio con descuento es " + resultado + "$"
}