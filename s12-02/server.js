const express = require('express'); // Motor web
const bodyParser = require('body-parser');
const path = require('path');
// agregamos la BD
const db = require('./models/index');

// Instanciar el motor 
const app = express();
const PORT = 3000;

// Middleware
app.use( bodyParser.json() );
app.use( express.urlencoded() );  

const datos = []

// Rutas
app.post('/api/ejemplo', (req,res) => {
    const data = req.body;
    console.log(`Hola ..estoy en ejemplo ${data.nombre}  ${data.curso}` );
    res.json( { 'msg' : 'Hola MUndo ! '});
})

app.get('/api/ejemplo', (req,res) => {
    const data = req.body;
    console.log(`Hola ..estoy en ejemplo con GET  ${data.nombre}  ${data.curso}` );
    res.json( { 'msg' : 'Hola MUndo con GET ! '});
})

// Rutas que van a la BD
app.get('/api/getUsers' , async (req,res) => {
    console.log("Entrando a getUSers .... ");
    let users = await(  db.user.findAll() );  // Equivale a SELECT * FROM "users";
    res.json(users);
});

app.post('/api/saveUsers' , async (req,res) => {
    console.log("Entrando a saveUSers .... ");
    let data = req.body;
    await(  db.user.create( data ) );  // Equivale a INSERT INTO "users" values( ... ) ;
    res.json( {"msg" : "Usuario insertado"});
});

app.put('/api/updateUsers' , async (req,res) => {
    console.log("Entrando a updateUsers .... ");
    let data = req.body;
    // Equivale a UPDATE "users" SET curso = valor  WHERE nombre = valor ;
    await(  db.user.update(
        { curso : data.curso },
        {
            where: {
                nombre : data.nombre
            }
        }
          ) );  
    res.json( {"msg" : "Usuario actualizado"});
});

app.delete('/api/deleteUsers' , async (req,res) => {
    console.log("Entrando a deleteUsers .... ");
    let data = req.body;
    // Equivale a DELETE FROm "users"  WHERE nombre = valor ;
    await(  db.user.destroy(
        {
            where: {
                nombre : data.nombre
            }
        }
          ) );  
    res.json( {"msg" : "Usuario eliminado"});
});

// Iniciar el Application server
app.listen( PORT , () => {
    console.log(`Servidor iniciado en PORT ${PORT}`);
})

