// Usando un Mock para observar el comportamiento de sendNotification
const { notifyUser, sendMessage } = require('../codigo/Mensaje.js');

describe('Pruebas MOCK de envio de Notificacion', () => {

  test('Notifica 1 - probando sendMessage ', () => {
    const user = { name: "John Doe" };
    const message = "Hola Mundo!";
  
    // Creamos un Mock para la función sendMessage
    const sendNotificationMock = jest.fn(sendMessage );
      // Llamamos a la función que queremos probar
    sendNotificationMock(user, message);
  
    // Verificamos que sendNotification fue llamado con los argumentos correctos
    expect(sendNotificationMock).toHaveBeenCalledWith(user, message);
    expect(sendNotificationMock).toHaveBeenCalledTimes(1); // Verificamos que fue llamado una vez
  });

  test('Notifica 2 - probando notifyUser ', () => {
    const user = { name: "John Dindon" };
    const message = "Hola Mundo JS!";
  
    // Creamos un Mock para la función sendMessage
    const sendNotificationMock = jest.fn(notifyUser );
      // Llamamos a la función que queremos probar
    sendNotificationMock(user, message);
  
    // Verificamos que sendNotification fue llamado con los argumentos correctos
    expect(sendNotificationMock).toHaveBeenCalledWith(user, message);
    expect(sendNotificationMock).toHaveBeenCalledTimes(1); // Verificamos que fue llamado una vez
  });


});
  