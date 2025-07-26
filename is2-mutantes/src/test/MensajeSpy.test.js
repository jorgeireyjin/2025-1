// test/notifyUser.spy.test.js
const msg = require('../codigo/Mensaje.js');

describe('Pruebas SPY de envio de Notificacion', () => {

  test('Notificacion 1 usando spy', () => {
    const user = { name: "John Spy" };
    const message = "Hola, esto es un mensaje de prueba con SPY.";

    // Creamos el spy sobre sendMessage del objeto Mensaje
    const sendMessageSpy = jest.spyOn(msg, 'sendMessage');
    msg.sendMessage(user, message);

    expect(sendMessageSpy).toHaveBeenCalledWith(user, message);
    expect(sendMessageSpy).toHaveBeenCalledTimes(1);

    sendMessageSpy.mockRestore();
  });

  test('Notificacion 2 usando spy', () => {
    const user = { name: "Juan Spy" };
    const message = "Hola, esto es un mensaje de prueba con SPY 2.";

    // Creamos el spy sobre sendMessage del objeto Mensaje
    const sendMessageSpy = jest.spyOn(msg, 'sendMessage');
    msg.sendMessage(user, message);

    expect(sendMessageSpy).toHaveBeenCalledWith(user, message);
    expect(sendMessageSpy).toHaveBeenCalledTimes(1);

    sendMessageSpy.mockRestore();
  });
});
