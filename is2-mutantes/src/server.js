/**
 * Ejemplo de servidor Node.js con Express
 * Incluye rutas para los métodos HTTP: GET, POST, PUT y DELETE
 * Todas las rutas reciben y envían datos en formato JSON
 */

 const express = require('express');
 const app = express();
 const port = 3000;
 
 // Middleware para parsear JSON en las solicitudes
 app.use(express.json());
 
  
 // Ruta GET: Probar STUB
 const userServiceStub = require('./test/UserServiceStub');
  app.get('/api/stub', (req, res) => {
   res.json( userServiceStub.getUser(999) );
 });

  // Ruta GET: Probar Dummy
  const mensajeDummy = require('./test/MensajeDummy');
  app.get('/api/dummy', (req, res) => {
    mensajeDummy.testSendMessage();
   res.json( {'msg' : 'Ejemplo de test  Dummy'} );
 });

   // Ruta GET: Probar Fake
   const db = require('./codigo/Database.js');
   const userDatabaseFake = require('./test/UserDatabaseFake');
   app.get('/api/fake', (req, res) => {
    const user = { id: 99, name: "John Doe 99" };
    // Agregamos un usuario usando el Fake
    db.createUser (userDatabaseFake, user);
    // Recuperamos el usuario usando el Fake
    res.json( db.getUser(userDatabaseFake, 99) ); 
  });
 
 
 // Iniciar servidor
 app.listen(port, () => {
   console.log(`Servidor escuchando en http://localhost:${port}`);
 });
 
 