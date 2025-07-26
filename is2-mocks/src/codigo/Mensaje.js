// Función que envía un mensaje a un usuario
const sendMessage = (user, message) => {
    console.log(`Enviando mensaje a ${user.name}: ${message}`);
    return { 'msg' : 'Mensaje enviado'}
  }
  
// Función que utiliza sendMessage
const notifyUser  = (user, message)  => {
    sendMessage(user, message);
  }

  module.exports = { sendMessage , notifyUser };