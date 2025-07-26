curl -X POST http://localhost:3000/api/pregunta1 -H "Content-Type:application/json" -d @alumno1.json
curl -X POST http://localhost:3000/api/pregunta1 -H "Content-Type:application/json" -d @alumno2.json
curl -X POST http://localhost:3000/api/pregunta1 -H "Content-Type:application/json" -d @alumno3.json
curl -X POST http://localhost:3000/api/pregunta1 -H "Content-Type:application/json" -d @alumno4.json

curl -X POST http://localhost:3000/api/pregunta2 -H "Content-Type:application/json" -d @pesos1.json

curl -X GET http://localhost:3000/api/pregunta3 -H "Content-Type:application/json" 

curl -X GET http://localhost:3000/api/pregunta4/11.4 -H "Content-Type:application/json" 

