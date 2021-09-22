function precioFinal(precio, descuento) {
  const calculo = (precio * (100 - descuento)) / 100;
  return calculo;
}

// const cupones = [
//   "Primera compra",
//   "Cliente frecuente",
//   "Pagas menos",
//   "Sorpresa",
// ];

// let descuento;

// switch (cupones) {
//   case "Primera compra":
//       descuento = 15;
//     break;
//   case "Cliente frecuente":
//       descuento = 34;
//     break;
//   case "Pagas menos":
//       descuento = 5;
//     break;
//   case "Sorpresa":
//       descuento = 25;
//     break;
//   default:
//     alert("Ingresa un cupón válido")
//     break;
// }




function yaPrecio(){
  const inputPrecio = document.getElementById("inputPrecio");
  const inputDescuento = document.getElementById("inputCupon");
  const valorPrecio = inputPrecio.value;
  const valorCupon = inputDescuento.value;
  
  let descuento;
  
  switch (valorCupon) {
    case "Primera compra":
      descuento = 15;
    break;
  case "Cliente frecuente":
      descuento = 34;
    break;
    case "Pagas menos":
      descuento = 5;
      break;
  case "Sorpresa":
      descuento = 25;
      break;
      default:
    alert("Ingresa un cupón válido")
    break;
  }
  const resultado = precioFinal(valorPrecio, descuento);
  const resultadoPrecio = document.getElementById("resultadoPrecio")
  resultadoPrecio.innerText = "El precio con descuento es " + resultado + "$"
}