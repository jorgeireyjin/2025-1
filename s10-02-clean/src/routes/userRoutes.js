// src/routes/userRoutes.js

const express = require('express');
const router = express.Router();

module.exports = function(userController) {
  router.get('/users', (req, res) => userController.getUsers(req, res));
  router.post('/users', (req, res) => userController.createUser(req, res));
  return router;
}
