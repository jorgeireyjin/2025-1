// src/controllers/userController.js

class UserController {
  constructor(userUseCase) {
    this.userUseCase = userUseCase;
  }

  async getUsers(req, res) {
    try {
      const users = await this.userUseCase.getAllUsers();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createUser (req, res) {
    try {
      const user = await this.userUseCase.createUser(req.body);
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = UserController;
