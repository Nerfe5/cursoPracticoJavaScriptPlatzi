/* const lista = [
    100,
    200,
    300,
    500,
]; */



function calcularMediaAritmetica (lista){
/*     let sumaLista = 0;
for (let i = 0; i < lista.length; i++) {
    sumaLista += lista[i];
} */

const sumaLista = lista.reduce((a, b) => a + b); //*reduce nos permite tranformar una lista en otra o reducirla

const promediolista = sumaLista / lista.length;
return promediolista;

}
