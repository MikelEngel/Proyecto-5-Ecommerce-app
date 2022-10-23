require('dotenv').config();

console.log(process.env.PORT);
console.log(process.env.URI_MONGO);

// Importar Express 
const express = require('express');

// Instanciar la aplicación
const  app = express();

//Middlewares
app.use(express.json());

//Importar rutas


//Declarar rutas
app.get('/',(req,res) => {
    res.json({ mensaje: "Bienvenido" });
});

//Levantar servidor
app.listen(process.env.PORT, () => {
    console.log(`Servidor iniciado en el puerto: ${process.env.PORT}`)
});







// const { mongoose } = require('./DataBase');
