//Código del cuadrado
console.group("Cuadrado")
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado (lado) {
    return lado * 4;
}

perimetroCuadrado();

//console.log("EL perimetro del cuadrado es: " + perimetroCuadrado + "cm" );

//const areaCuadrado = 
function areaCuadrado (lado) {
    return lado * lado;
}

areaCuadrado();
//console.log("EL área del cuadrado es: " + areaCuadrado + "cm^2" );

console.groupEnd();

//Código del triángulo
 console.group("Triángulo")
/*const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;
console.log("Los lados del triángulo miden " 
+ ladoTriangulo1 
+ "cm " 
+ ladoTriangulo2 
+ "cm " 
+ baseTriangulo 
+ "cm"
); */
function perimetroTriangulo (lado1, lado2,base){
    return lado1 + lado2 + base;
}
perimetroTriangulo()

//console.log("El perimetro del triángulo es: " + perimetroTriangulo + "cm");
function areatriangulo (base,altura){
    return (base * altura)/2;
} 

areatriangulo()
//console.log("El área del triángulo es: " + areatriangulo + "cm^2")
console.groupEnd();

//Código del Círculo
console.group("Círculo");

//Radio
//const radioCirculo = 4;
//console.log("El radio del circulo es " + radioCirculo + "cm");
//Diámetro
function diametroCirculo(radio) {
    return radio *2;
}


//PI

const PI = Math.PI;
//Circunferencia
function perimetroCirculo (radio){
const diametro = diametroCirculo(radio); //* En está parte de la función lo que hacemos es calcular el diamtro del circulo mediante la funcion diametroCirculo pasandole como argumento el radio
return diametro * PI; 
} 

perimetroCirculo();

//Área

function areaCirculo (radio){
return (radio * radio) * PI;
}

areaCirculo();
console.groupEnd();