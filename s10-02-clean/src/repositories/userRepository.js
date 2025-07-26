// src/repositories/userRepository.js

class UserRepository {
  constructor() {
    this.users = [];
  }

  getAll() {
    return this.users;
  }

  save(user) {
    this.users.push(user);
  }
}

module.exports = UserRepository;
