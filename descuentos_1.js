




function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;                  
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;  
    
 

    return precioConDescuento;
}



function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById('inputPrice');
    const price = inputPrice.value;
    const inputCupon = document.getElementById('inputCupon');
    const cupon = inputCupon.value;

    const resultCupon = document.getElementById('precioConCupon');

    let descuento;   
    let precioConDescuento;
    
    switch(true){
        case cupon === 'maxCupon':
            descuento = 30;
            precioConDescuento = calcularPrecioConDescuento(price, descuento);
            resultCupon.innerText =`Cupon es valido, el precio con descuento es de: $${precioConDescuento} dolares`
            break;

            case cupon === 'basicCupon':
                descuento = 20;
                precioConDescuento = calcularPrecioConDescuento(price, descuento);
                resultCupon.innerText = `Cupon es valido, el precio con descuento es de: $${precioConDescuento} dolares`
                break;

                case cupon === 'mainCupon':
                    descuento = 10;
                    precioConDescuento = calcularPrecioConDescuento(price, descuento);
                    resultCupon.innerText = `Cupon es valido, el precio con descuento es de: $${precioConDescuento} dolares`
                    break;

                    default:
                        resultCupon.innerText = `Cupon no es valido`
                }
   

            }
      