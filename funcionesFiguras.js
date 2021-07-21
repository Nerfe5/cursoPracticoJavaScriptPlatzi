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
    return Number(lado1) + Number (lado2) + Number(base);
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


//calculaAlturaIsosceles


function alturaIsosceles (cateto_a,cateto_b,cateto_c){
    
    if (cateto_a === cateto_b && cateto_a != cateto_c){
        //* Heigth of the triangle isósceles
        const altura = Math.sqrt(cateto_a**2 - cateto_c**2/ 4)
        return altura;
    }
    else{ 
        return ("No es un triángulo isósceles")
}
    
}
alturaIsosceles();

console.groupEnd();

//*En nuestro codigo lo que se busca es que cada vez que demos click en el botón ya sea para calcular perimetro o área queremos que se llame a una función que creamos en JS para poder reaccinar 

//* Aquí interactuamos con el HTML

function calcularPerimetroCuadrado(){  
    const input = document.getElementById("InputCuadrado");
    const value = input.value; //!El valor de input y su propiedad asi obtenemos el valor que escribieron los usuarios en el input en el html
    
    const perimetro = perimetroCuadrado(value);
    alert (perimetro);

}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value; //!El valor de input y su propiedad, asi obtenemos el valor que escribieron los usuarios en el input en el html
    
    const area = areaCuadrado(value);
    alert (area);


}

function calcularPerimetroTriangulo (){
    const input1 = document.getElementById("Input1");
    const lado1 = input1.value;
    const input2 = document.getElementById("Input2");
    const lado2 =  input2.value;
    const input3 = document.getElementById("Base")
    const base = input3.value;

    const perimetro = perimetroTriangulo(lado1,lado2,base);
    
    alert(perimetro);
}

function calcularAreaTriangulo(){

    const input_1 = document.getElementById("baseTriangulo");
    const baja = input_1.value;
    const input_2 = document.getElementById("altura");
    const alto = input_2.value;

    
    const area = areatriangulo(baja, alto);
    alert(area);
}

function calcularPerimetroCirculo(){
    const input_r = document.getElementById("radio");
    const linea = input_r.value;

    const perimetro = perimetroCirculo(linea);
    
    alert(perimetro);
}

function calcularAreaCirculo(){
    const media = document.getElementById("ratio")
    const rallita = media.value;

    const area = areaCirculo (rallita);
    alert(area);

}

function calculaAlturaIsosceles(){

    const cateto_a = document.getElementById("cateto_a");
    const ladoa = cateto_a.value;
    const cateto_b = document.getElementById("cateto_b");
    const ladob = cateto_b.value;
    const cateto_c = document.getElementById("cateto_c");
    const ladoc = cateto_c.value;

    const altura = alturaIsosceles(ladoa,ladob,ladoc)

    alert(altura);

}
