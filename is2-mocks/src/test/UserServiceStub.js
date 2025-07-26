// Ejemplo de Test STUB
class UserServiceStub {

    getUser (id) {
      // Respuesta predeterminada
      return { id: id, name: "John Doe" }; 
    }
  }
  
  // Exportamos una instancia para usar directamente
module.exports = new UserServiceStub();