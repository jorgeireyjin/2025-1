// src/usecases/userUseCase.js

const User = require('../entities/User');

class UserUseCase {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  getAllUsers() {
    return this.userRepository.getAll();
  }

  createUser(userData) {
    const user = new User(Date.now(), userData.name, userData.email);
    this.userRepository.save(user);
    return user;
  }
}

module.exports = UserUseCase;
