/**
 * Todas las rutas reciben y envían datos en formato JSON
 */

const express = require('express');
const app = express();
const port = 3000;

// Middleware para parsear JSON en las solicitudes
app.use(express.json());

/*
Definimos los pesos de las evaluaciones
*/
const pesos = new Map();

/* 
Aqui almacenamos los datos
*/
const datos = [];

/*
Aqui guardamos los promedios calculados
*/
var promedios = [];

/*
Pregunta 1:
La api debe recibir un archivo JSON con las notas de un alumno y almacenarlas
de tal forma que luego se puedan procesar
*/
app.post('/api/pregunta1', (req, res) => {
  const data = req.body;
  console.log(data);
  datos.push(data);
  res.json({ 'msg': `ALumno agregado  ... van ${datos.length}` });
});

/*
Pregunta 2:
Una API que reciba los pesos de las evaluaciones.
Tener presente que los pesos se pueden enviar varias veces con valores diferentes.
 Para el procesamiento de los promedios solo vale el último grupo de pesos enviados.

*/
app.post('/api/pregunta2', (req, res) => {
  const data = req.body;
  pesos.set('EP',data.EP);
  pesos.set('EF',data.EF);
  pesos.set('TA',data.TA);
  pesos.set('P1',data.Componentes.P1);
  pesos.set('P2',data.Componentes.P2);
  pesos.set('P3',data.Componentes.P3);
  pesos.set('P4',data.Componentes.P4);
  pesos.set('PR',data.Componentes.PR);
  
  res.json( pesos );
});

/*
Pregunta 3:
La api no recibe parametros.
Calcula loss  y devuelve los codigos de los alumnos y su promedio final
*/
app.get('/api/pregunta3', (req, res) => {

  promedios = datos.map((alumno) => {
    let ta = (alumno.P1 * pesos.get('P1') + alumno.P2 * pesos.get('P2') + alumno.P3 * pesos.get('P3') + alumno.P4 * pesos.get('P4') + alumno.PR * pesos.get('PR') ) /100
    let prom = (alumno.EP * pesos.get('EP') + alumno.EF * pesos.get('EF') + ta * pesos.get('TA') ) / 100
    const obj = { codigo: alumno.codigo, promedio: prom }
    return obj
  });

  promedios.sort((a, b) => b.promedio - a.promedio);

  res.json(promedios);

});

/*
Pregunta 4:
La api no recibe parametros.
Devuelve al alumno o alumnos que superan dicho promedio.
Debe retornar el código y promedio final de cada alumno en dicha situación
*/
app.get('/api/pregunta4/:limite', (req, res) => {
  const limite = req.params.limite;

limite
  // Filtrar los objetos que tienen el promedio menor o igual al menor
  let rpta = promedios.filter(obj => obj.promedio > limite);;
  res.json(rpta);

});


// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});

