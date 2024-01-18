let porcentajeDescuento = 0;
let cantidadMillas = 40000;

if (cantidadMillas > 30000) {
    porcentajeDescuento = 20;
} else if (cantidadMillas > 5000) {
    porcentajeDescuento = 10;
} else {
    porcentajeDescuento = 0;
}

console.log(porcentajeDescuento);