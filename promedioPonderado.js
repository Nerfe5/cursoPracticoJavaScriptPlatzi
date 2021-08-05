const notes = [
    {
        course: 'Matemáticas',
        note: 10,
        credits:2,
    },
    {
        course: 'Física',
        note: 8,
        credits:5,
    },
    {
        course: 'Química',
        note: 7,
        credits:5,
    },
];

//*Multiplicar cada número de la lista por su peso*

const notesWhithCredit = notes.map(function(noteObject){
return noteObject.note * noteObject.credits;    
});

//*Sumar todos los elementos del arreglo de elementos multiplicados por su peso*
const sumOfNotesWithCredit = notesWhithCredit.reduce(function(sum, note){   
    return sum + note;
}
);


//* Sumar todos los pesos de la lista (credits)*
const credits = notes.map(function(noteObject){
    return noteObject.credits;
});
const sumOfCredits = credits.reduce(function(sum=0, newValue){
    return sum + newValue;
}
);

//*Hacer la división de la suma de los pesos por la suma de los elementos multiplicados por su peso*
const average = sumOfNotesWithCredit / sumOfCredits;

console.log(average);

