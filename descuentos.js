
/* const precioOriginal = 100;
const descuento = 15; */

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;                  //* Porcentaje de precio con descuento
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;  //* Precio con descuento

    return precioConDescuento;
}

function onClickButtonPrice(){
    const InputPrice = document.getElementById('InputPrice');
    const priceValue = InputPrice.value;

    const InputDiscount = document.getElementById('InputDiscount');
    const discountValue = InputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    const resultPrice = document.getElementById('resultPrice');
    resultPrice.innerText = 'El precio con descuento es de: $'+ precioConDescuento;
}