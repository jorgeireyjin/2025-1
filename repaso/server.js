// REquerimos un motor web
const express = require('express');
// Queremos procesar JSON
const bodyParser = require('body-parser');

// Manejar FileSystem
const path = require('path');

// La base de datos
const db = require('./models/index');


// Instanciar el motor web
const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json() );
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, './static')))

// ... aqui va la logica de rutas
/*
Una ruta tiene varias partes
/api
   parte-2
      parte-3
Es decir, las rutas se van concatenando
*/
app.get('/api/ejemplo1', (req,res) =>{
    /*
    Cuando envio un JSON y hago esto, se conoce como "desestructuracion"
    Entonces:
    Formas de redcibir el JSON:
    1) const data = req.data --> aqui viene como un objeto tendria que hacer data.nombre
    2) const {nombre, email } = req.body; --> aqui se desestructura
    */
    const {nombre, email } = req.body;
    console.log(`Datos enviados ${nombre} - ${email}`)
    res.json( { "msg" : "Datos recibidos ... con GET"})
})

app.post('/api/ejemplo1', (req,res) =>{
    const {nombre, email } = req.body;
    console.log(`Datos enviados ${nombre} - ${email}`)
    res.json( { "msg" : "Datos recibidos ...con POST "})
})

/*
Hay varias formas de enviar datos a la aplicacion
1) Por parametros en el URL. Ejemplo:
     http://localhost:3000/ejemplo1?param1=valor1&param2=valor2

2) Enviar en un JSON

3) Por ruta ( es lo mas usado en backend)
    http://localhost:3000/api/ejemplo1/Jorge
    http://localhost:3000/api/ejemplo1/Pepe
*/
app.get('/api/ejemplo1/:nombre', (req,res) =>{
    const nombre = req.params.nombre;
    console.log(`Datos enviados ${nombre} `)
    res.json( { "msg" : "Datos recibidos ... por URL "})
})

app.get('/api/ejemplo1/:nombre/:email', (req,res) =>{
    const nombre = req.params.nombre;
    const email = req.params.email;
    console.log(`Datos enviados ${nombre} - ${email}`)
    res.json( { "msg" : "Datos recibidos ... por URL "})
})

/*****************   RUTAS PARA BASE DE DATOS **********/
app.post('/api/saveUser', async (req,res) =>{
    const data = req.body;
    console.log(`Datos enviados ${data.nombre} - ${data.email}`)

    await db.user.create(data);

    res.json( { "msg" : "Datos GRABADOS ...con POST "})
})

app.post('/api/saveUser2/:nombre/:email', async (req,res) =>{
   const nombre = req.params.nombre;
    const email = req.params.email;
    console.log(`Datos enviados ${nombre} - ${email}`)

    await db.user.create(
        {
            nombre : nombre,
            email: email
        }
    );
    
    res.json( { "msg" : "Datos GRABADOS ...con POST "})
})

app.get('/api/findAllUser', async (req,res) =>{

    let users = await db.user.findAll();

    res.json( users )
})


// EL ultimo sitio donde buscara rutas
app.get('/saluda' , (req, res) => {
    res.sendFile( path.join(__dirname,'./static/index.html'));
})

// Iniciar el Server
app.listen(PORT ,() => {
    console.log(`Servidor iniciado en el puerto ${PORT}`)
})

