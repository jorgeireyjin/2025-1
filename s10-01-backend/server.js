const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware para parsear el cuerpo de las solicitudes JSON
app.use(bodyParser.json());
// Opciones de CORS
const corsOptions = {
  origin: ['http://localhost:3000', 'http://localhost:5173'], // Dominios permitidos
  credentials: true,
};
app.use(cors(corsOptions)); // Usar el middleware CORS con las opciones definidas

// Ruta GET
app.get('/api/saludo', (req, res) => {
    res.json({ mensaje: 'GET ¡Hola, mundo!' });
});

// Ruta POST que recibe JSON con "nombre"
app.post('/api/saludo', (req, res) => {
    const { nombre, email } = req.body;
    if (!nombre || !email) {
        return res.status(400).json({ mensaje: 'Faltan campos obligatorios' });
    }

    res.json({ mensaje: `POST ¡Hola, ${nombre}! - ${email}`  });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
