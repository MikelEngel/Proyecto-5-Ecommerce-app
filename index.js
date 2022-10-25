// // Importar variables de entorno
require("dotenv").config();

console.log(process.env.PORT);
console.log(process.env.URI_MONGO);

// Importar modelos
require("./models");

// Importar Express, mongoose & route 
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes");

// Instanciar la aplicación
const app = express();

//Middlewares
app.use(cors());
app.use(express.json());


//Conexión a mongo
mongoose.connect(process.env.URI_MONGO);

//Definir rutas
app.use('/v1', routes)


app.use((req, res, next) => {
    res.send('<a href="/v1">Go to API');
});

//Levantar servidor
app.listen(process.env.PORT, () => {
    console.log(`Servidor iniciado en el puerto: ${process.env.PORT}`)
});