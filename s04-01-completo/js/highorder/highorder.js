/*************************************** */
/* MEtodo FOREACH */
/*************************************** */
data = [1,3,5,7,9]
let total = data.forEach( (item) =>{
    console.log(item)
})

console.log(" * * * FOREACH * * *")
let suma = 0
data.forEach( item => {
    suma += item
})
console.log("usando ForEach es " + suma)

const ejem1 = data.forEach(function(num, index, data){
    console.log(`El numero ${num}, esta en la posicion ${index} del arreglo: ${data}`
    )
    });