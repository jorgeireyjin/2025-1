// Fake de una base de datos de usuarios

const db = require
class UserDatabaseFake {
    constructor() {
      this.users = []; // Almacena usuarios en memoria
    }
  
    // Método para agregar un usuario
    addUser (user) {
      this.users.push(user);
    }
  
    // Método para obtener un usuario por ID
    getUser_ById(id) {
      return this.users.find(user => user.id === id);
    }
  }
  
  module.exports = new UserDatabaseFake();