// test/sendMessage.test.js
const { sendMessage, notifyUser  } = require('../codigo/Mensaje'); // Ajusta la ruta según tu proyecto

describe('Pruebas de MUTACION sendMessage', () => {
  it('debe retornar el objeto correcto', () => {
    const user = { name: 'Juanito' };
    const message = 'Hola';
    const result = sendMessage(user, message);
    expect(result).toEqual({ msg: 'Mensaje enviado' });
  });

  it('debe imprimir el mensaje correcto en consola', () => {
    console.log = jest.fn(); // Mockear console.log
    const user = { name: 'Martita' };
    const message = 'Saludos';
    sendMessage(user, message);
    expect(console.log).toHaveBeenCalledWith('Enviando mensaje a Martita: Saludos');
  });
});

