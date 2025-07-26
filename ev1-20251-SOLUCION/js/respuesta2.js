for ( let fila=1; fila <=3; fila++) {
    for (let col=fila; col <= fila+6; col = col +3) {
        linea = "<img src='./imagenes/00"+col+".png' />"
        document.writeln(linea)
        console.log(linea)
    }
}
document.writeln("<div><a href='index.html'>Regresar </a></div>");