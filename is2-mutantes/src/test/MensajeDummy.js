// En una prueba, podemos usar un Dummy
const m = require('../codigo/Mensaje');

const testSendMessage = () => {
    const dummyUser  = { name: "Dummy User" }; // Este es un Dummy
    const message = "Hola, esto es un mensaje de prueba.";
  
    // Llamamos a la función con el Dummy
    m.sendMessage(dummyUser , message);
  }

  module.exports = { testSendMessage };