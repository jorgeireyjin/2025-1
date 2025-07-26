/*
REFERENCIAS:
https://www.codecademy.com/learn/game-dev-learn-javascript-higher-order-functions-and-iterators/modules/game-dev-learn-javascript-iterators/cheatsheet
https://www.freecodecamp.org/news/higher-order-functions-in-javascript/
*/


/* Ejemplo de REDUCE 

This method executes a callback function on every element in the array, 
which results in a single value. 
The method accepts two arguments:
    Callback function
    Initial value

The callback function accepts the following four parameters:
    Accumulator
    Current value
    Current index
    Source array

https://medium.com/@xadrijo/un-vistazo-a-la-funci%C3%B3n-reduce-en-javascript-f4459bc4e3aa
*/
console.log(" * * * REDUCE * * *")
console.log("Sumando tradicionalmente ...")
let data = [1, 2, 3, 4];
let suma1 = 0
for (i=0; i < data.length; i++) {
    suma1 = suma1 + data[i]
}
console.log(suma1); 

console.log("Sumando con REDUCE ...")
 data = [5, 6, 7, 8];
const suma2 = data.reduce( (total, valorActual) => {  
  return total + valorActual;
});

console.log(suma2); 

/*************************************** */
/* MEtodo FOREACH */
/*************************************** */
console.log(" * * * FOREACH * * *")
data = [1,3,5,7,9]
let total = data.forEach( (item) =>{
    console.log(item)
})

let suma = 0
data.forEach( item =>{
    suma += item
})
console.log("usando ForEach es " + suma)

/*************************************** */
/* Ejemplo de MAP 
La matriz original no se modifica y la matriz devuelta puede contener elementos diferentes 
a los de la matriz original.
/*************************************** */
console.log(" * * * MAP * * *")
const alumno = ['PEpito', 'Carlitos', 'Luchito', 'Anita', 'Dorita'];

const listado = alumno.map( a => {
  return a + ' asistio a clase';
})

console.log(listado);


/*************************************** 
Ejemplo de FILTER
*************************************** */
console.log(" * * * FILTER * * *")
const numeros = [1,2,3,4,5,6,7,8,9,10];
const pares = numeros.filter(n => {  
  return n % 2 == 0;
});
console.log("Los pares son " + pares)















