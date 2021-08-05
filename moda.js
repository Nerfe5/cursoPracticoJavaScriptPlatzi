/* const lista1 = [
   3,
   4,
   2,   
   1,
   3,   
   4,
   2,
   1,
   3,
   4,
   4,
   
]; */


//* creamos un objeto 

function calcularModa(lista1){
const lista1Count = {};

lista1.map(
    function(elemento){
        if(lista1Count[elemento]){
            lista1Count[elemento]++;    //*Iteración de elemntos en la lista
        }else{
            lista1Count[elemento] = 1;
        }

    }
);

const lista1Array = Object.entries(lista1Count).sort(    //*Object.entries devuelve un array con los elementos de un objeto
    function(valorAcumulado, nuevoValor){;
        return valorAcumulado[1] - nuevoValor[1];           //*Ordenamos los arrays conforme al segundo valor
    }
);
const moda = lista1Array[lista1Array.length - 1];
return moda;
}
console.log(calcularModa([]));