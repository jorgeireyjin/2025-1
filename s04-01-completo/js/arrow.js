/*
Funcion tradicional
*/
function sumarTradicional() {
    console.log("FUncion tradicional")
    var v1 = document.getElementById("v1").value
    var v2 = document.getElementById("v2").value
    var rpta = parseInt(v1) + parseInt(v2)
    document.getElementById("resultado").innerHTML = rpta
}

/*
Arrow function
*/
let sumarArrow1 = () => {
    console.log("FUncion sumarArrow1")
    var v1 = document.getElementById("v1").value
    var v2 = document.getElementById("v2").value
    var rpta = parseInt(v1) + parseInt(v2)
    document.getElementById("resultado").innerHTML = rpta
}

/*
Arrow function
*/
let sumarArrow2 = () => {
    console.log("FUncion sumarArrow2")
    var v1 = document.getElementById("v1").value
    var v2 = document.getElementById("v2").value
    let rpta = sumarArrowOtraForma(  parseInt(v1) , parseInt(v2) )
    document.getElementById("resultado").innerHTML = rpta
}

let sumarArrowOtraForma = (a , b) => a + b;







