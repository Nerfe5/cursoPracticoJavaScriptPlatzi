//*Funciones Helpers

function esPar(numerito){
    return (numerito % 2 == 0);
    }
    function calcularMediaAritmetica (lista){
        const sumaLista = lista.reduce((a, b) => a + b); //*reduce nos permite tranformar una lista en otra o reducirla
        const promediolista = sumaLista / lista.length;
        return promediolista;
        
        };

//*Calcualadora de promedio de salarios

function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);
    if(esPar(lista.length)){
        const personMitad1 = lista[mitad -1];
        const personMitad2 = lista[mitad];
        const mediana = calcularMediaAritmetica([personMitad1, personMitad2]);
        
        return mediana;
    }else{
        const personMitad = lista[mitad];
        return personMitad;
    }
    
}

//*Mediana General
const salariosMex = mexico.map(
    function(person){
    return person.salary;
}
);

const salariosMexSorted = salariosMex.sort(
function(salaryA,salaryB){
    return salaryA -salaryB;
}
);


const medianaGeneralMex = medianaSalarios(salariosMexSorted);

//*Mediana del Top 10%

const spliceStart = (salariosMexSorted.length * 90) / 100;
const spliceEnd = salariosMexSorted.length -spliceStart;

const salarioMexTop10 = salariosMexSorted.slice(
    spliceStart,spliceEnd
    );
 const medianaTopMex = medianaSalarios(salarioMexTop10);

console.log({
    medianaGeneralMex,
    medianaTopMex,
});    
