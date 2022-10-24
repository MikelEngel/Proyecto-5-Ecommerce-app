// Importar variables de entorno
require('dotenv').config();


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


app.use((req, res, next) => {
    res.send('<a href="7v1">Go to API');
});

//Levantar servidor
app.listen(process.env.PORT, () => {
    console.log(`Servidor iniciado en el puerto: ${process.env.PORT}`);
});







// const { mongoose } = require('./DataBase');
