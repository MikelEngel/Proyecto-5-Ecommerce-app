const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://Angel:engelHV27@cluster0.hidpcwv.mongodb.net/test");

const Estante = mongoose.model("Estante", {
    modelo: String,
    descripcion: String,
    medidas: String,
    precio: Number,

});


const estante = new Estante({
    modelo: "HODWR01",
    descripcion: "ESTANTE 3 NIVELES",
    medidas: "60 x 35 x 76 cm",
    precio: 100,
})

estante.save().then(()=>{
    console.log("Guardado");
});

Estante.find().then((estantes) => {console.log(estantes)});