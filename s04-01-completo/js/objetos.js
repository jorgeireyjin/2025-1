/*
REFERENCIAS

Symbol : https://midu.dev/javascript-symbols-que-son-para-que-sirven/
Objetos: https://es.javascript.info/object 
*/

// sintaxis de "constructor de objetos"
let obj1 = new Object(); 
// sintaxis de "objeto literal"
let obj2 = {};  

// Un objeto 
let alumno = {     
    nombre: "Pepito",  
    codigo: '20230202'        
  };

// Obtener los valores
console.log( alumno.nombre )
console.log( alumno.codigo)

// Asignar propiedades
alumno.ciclo = "2023-2"
console.log( alumno.ciclo)
console.log(alumno)

// Eliminar un propiedad
delete alumno.codigo
console.log( alumno )

// las propiedades pueden ser de varias palabras
// en ese caso se registra asi:
alumno['nro veces'] = 1
console.log( alumno )
// Es es util cuando la propiedad se usa en runtime como variable
// Pero no funciona con la notacion "."


// El Operador IN
console.log( "La propiedad codigo existe en alumno ? : " + ('codigo' in alumno ) )

// Convertir objeto a String
console.log( alumno.toString()  )

// El bucle "for..in"
// Para recorrer todas las claves de un objeto existe una forma especial de bucle: for..in.
for (key in alumno) {
    console.log( "KEY : " + key + " - " + alumno[key] )
}






