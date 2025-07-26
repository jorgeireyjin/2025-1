/********************************************************
spread : https://dev.to/alextomas80/el-operador-spread-en-javascript-12hc
/*******************************************************/
/* SPREAD :copiar  */
let numeros = [2,4,6,8,10];
console.log(numeros); // Resultado -> 'perro', 'caballo', 'gato', 'oso', 'jirafa'

let otrosNumeros = [...numeros];
console.log(otrosNumeros); 

/* SPREAD :copiar y agregar */
let arr1 = [...numeros, 1,3,5,7];
console.log(arr1); 
let arr2 = [100,101,102, ...numeros, 1,3,5,7];
console.log(arr2); 

/* SPREAD : concatenar */
let m = ['Dorita','Anita']
let h = ['Pepito','Luchito']
let todos = [...h , ...m]
console.log(todos)

/*********************************************
 * Sgtring interpolation
 * https://dmitripavlutin.com/javascript-template-strings/
 ********************************************/
 const edad = 42;
 const msg = `La edad es ${edad}`;
 console.log(msg);

const palabra1 = 'Hola';
const palabra2 = 'Mundo';

saludo = `${palabra1}, ${palabra2}!`;
console.log(saludo);









