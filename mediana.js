function calcularMediaAritmetica (lista){
    const sumaLista = lista.reduce((a, b) => a + b); //*reduce nos permite tranformar una lista en otra o reducirla
    const promediolista = sumaLista / lista.length;
    return promediolista;
    
    }




function calcularMediana (lista){
const listaOrdenada = lista.sort((a, b) => a - b); //*lista ordenada*

const mitadLista = parseInt(listaOrdenada.length / 2);

function esPar(numero) {
  if (numero % 2 === 0){  //*Modulo* % es igula ceros
    return true;
  } else {  
    return false;
  }

};

let mediana;

if (esPar(listaOrdenada.length)) {
    const elemento1 = listaOrdenada[mitadLista];
    const elemento2 = listaOrdenada[mitadLista - 1];
    const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);
    mediana = promedioElemento1y2;
}
else {
    mediana = (listaOrdenada[mitadLista])

}
return mediana; 
}
console.log(calcularMediana([200, 400, 500, 100, 100, 900]));