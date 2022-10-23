// Importar variables de entorno
require('dotenv').config();

// console.log(process.env.PORT);
// console.log(process.env.URI_MONGO);

// Importar modelos
require("./models");

// Importar Express, mongoose & route 
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

// Instanciar la aplicación
const app = express();

//Middlewares
app.use(express.json());


//Conexión a mongo
mongoose.connect(process.env.URI_MONGO);

//Definir rutas
app.use('/v1', routes)


//Declarar rutas
app.get('/',(req, res) => {
res.json({ mensaje: "Bienvenido" });
});

//Levantar servidor
app.listen(process.env.PORT, () => {
    console.log(`Servidor iniciado en el puerto: ${process.env.PORT}`);
});







// const { mongoose } = require('./DataBase');
