// src/repositories/userRepository.js

class UserRepository {
  constructor() {
    this.users = [];
  }

  /* CAmbiar aqui : colocar ASYNC */
  async  getAll() {
     throw new Error("Método no implementado");
  }

  /* CAmbiar aqui : colocar ASYNC */
  async save(user) {
     throw new Error("Método no implementado"); 
  }
}

module.exports = UserRepository;
