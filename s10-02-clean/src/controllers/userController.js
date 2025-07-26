// src/controllers/userController.js

class UserController {
  constructor(userUseCase) {
    this.userUseCase = userUseCase;
  }

  getUsers(req, res) {
    const users = this.userUseCase.getAllUsers();
    res.json(users);
  }

  createUser(req, res) {
    const userData = req.body;
    if (!userData.name || !userData.email) {
      return res.status(400).json({ error: 'Faltan datos obligatorios' });
    }
    const newUser = this.userUseCase.createUser(userData);
    res.status(201).json(newUser);
  }
}

module.exports = UserController;
