//Código del cuadrado
console.group("Cuadrado")
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("EL perimetro del cuadrado es: " + perimetroCuadrado + "cm" );

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("EL área del cuadrado es: " + areaCuadrado + "cm^2" );

console.groupEnd();

//Código del triángulo
console.group("Triángulo")
const ladoTriangulo1 = 6;
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
);
console.log("La atura del triángulo es de: " + alturaTriangulo + "cm");
const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del triángulo es: " + perimetroTriangulo + "cm");
const areatriangulo = (baseTriangulo * alturaTriangulo)/2;
console.log("El área del triángulo es: " + areatriangulo + "cm^2")
console.groupEnd();

//Código del Círculo
console.group("Círculo");

//Radio
const radioCirculo = 4;
console.log("El radio del circulo es " + radioCirculo + "cm");
//Diámetro
const diametroCirculo = radioCirculo *2;
console.log("El diametro del circulo es " + diametroCirculo + "cm");


//PI

const PI = Math.PI;
console.log("El valor del PI es : " + PI);
//Perimetro
const perimetroCirculo = diametroCirculo * PI;
console.log("El perimetro del circulo es " + perimetroCirculo + "cm");

//Área
const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El área del circulo es " + areaCirculo + "cm^2");


console.groupEnd();
