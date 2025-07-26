// src/server.js

const express = require('express');
const bodyParser = require('body-parser');

const UserRepository = require('./repositories/userRepository');
const UserUseCase = require('./usecases/userUseCase');
const UserController = require('./controllers/userController');
const userRoutesFactory = require('./routes/userRoutes');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Instanciar capas
const userRepository = new UserRepository();
const userUseCase = new UserUseCase(userRepository);
const userController = new UserController(userUseCase);

// Registrar rutas
app.use('/api', userRoutesFactory(userController));

app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
