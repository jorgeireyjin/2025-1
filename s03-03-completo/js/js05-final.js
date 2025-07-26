/* Recorrer cabecera y body */
var cabecera = document.head;
console.log(cabecera)

var cuerpo = document.body
console.log(cuerpo)

/* Cada nodo tiene una propiedad nodeTye */
var lpAntiguos = document.getElementById("antiguo")
console.log(lpAntiguos)

var nodos = lpAntiguos.childNodes
var arr_antiguos = []

for (let i=0; i < nodos.length; i++) {
    console.log(nodos[i] )

    if ( nodos[i].nodeType == document.ELEMENT_NODE) {
        arr_antiguos.push( nodos[i].textContent )
    }
}
document.getElementById("rpta1").innerHTML = arr_antiguos


var lpModernos = document.getElementById("moderno")
console.log(lpModernos)

var nodos = lpModernos.childNodes
var arr_modernos = []

for (let i=0; i < nodos.length; i++) {
    console.log(nodos[i] )

    if ( nodos[i].nodeType == document.ELEMENT_NODE) {
        arr_modernos.push( nodos[i].textContent )
    }
}
document.getElementById("rpta2").innerHTML = arr_modernos

// Concatenar arreglos
document.getElementById("rpta1").innerHTML = arr_antiguos.concat(arr_modernos)

// Convertir el arreglo a cadena
document.getElementById("rpta2").innerHTML = arr_antiguos.join("+")

// Buscar la posicion de un elemento en el arreglo 
document.getElementById("rpta1").innerHTML = arr_modernos.indexOf("Kotlin")

/*** COSAS MAS COMPLICADAS ***/
document.getElementById("rpta1").innerHTML = arr_modernos
// Insertar un elemento
arr_modernos.splice(1, 0 , "Unlambda" , "Malbolge")
document.getElementById("rpta2").innerHTML = arr_modernos

document.getElementById("rpta1").innerHTML = arr_modernos
// BOrrar y voy a insertar un elemento
arr_modernos.splice(3, 1 , "Intercal" , "Ook!")
document.getElementById("rpta2").innerHTML = arr_modernos

document.getElementById("rpta1").innerHTML = arr_modernos
// BOrrar  un elemento
arr_modernos.splice(3, 1)
document.getElementById("rpta2").innerHTML = arr_modernos


/* Podemos simular Queues y Stack ***/
/* Retirar el ultimo elemento */
document.getElementById("rpta1").innerHTML = arr_modernos
var x = arr_modernos.pop()
document.getElementById("rpta2").innerHTML = x

/* Quiero retirar el primer elemento */
document.getElementById("rpta1").innerHTML = arr_modernos
var x = arr_modernos.shift()
document.getElementById("rpta2").innerHTML = x

/* Colocar elemento al final */
document.getElementById("rpta1").innerHTML = arr_modernos
arr_modernos.push("Dart")
document.getElementById("rpta2").innerHTML = arr_modernos

arr_modernos[ arr_modernos.length] = "Opa"
document.getElementById("rpta2").innerHTML = arr_modernos

/* Colocar elemento al inicio */
document.getElementById("rpta1").innerHTML = arr_modernos
arr_modernos.unshift("Assembler")
document.getElementById("rpta2").innerHTML = arr_modernos


/* Ordenar arreglos */
/* El orden es lexicografico */
document.getElementById("rpta1").innerHTML = arr_modernos
arr_modernos.sort();
document.getElementById("rpta2").innerHTML = arr_modernos

document.getElementById("rpta1").innerHTML = arr_modernos
arr_modernos.reverse();
document.getElementById("rpta2").innerHTML = arr_modernos


var a = [ 2,4,6,8]
var b = [ 100,30,5,7,9]
var c = a.concat(b)
document.getElementById("rpta1").innerHTML = c
c.sort()
document.getElementById("rpta2").innerHTML = c

/* Funcion anonima */
c.sort( function(a,b) {
    return a - b 
})

document.getElementById("rpta2").innerHTML = c

/* Generar un bloque HTML */
var rpta = []

rpta.push("<ul>")
for (let i=0; i < arr_modernos.length; i++) {
    rpta.push("<li>" + arr_modernos[i] + "</li>")
}
rpta.push("</ul>")

contenido = rpta.join(" ")

document.getElementById("rpta1").innerHTML = contenido