function PrecioFinal(precio, descuento) {
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
