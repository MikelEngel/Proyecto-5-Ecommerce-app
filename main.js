const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://Angel:engelHV27@cluster0.hidpcwv.mongodb.net/test");

const Producto = mongoose.model("Producto", {
    modelo: String,
    descripcion: String,
    medidas: String,
    precio: Number,

});


const estante = new Producto({
    modelo: "HODWR01",
    descripcion: "ESTANTE 3 NIVELES",
    medidas: "60 x 35 x 76 cm",
    precio: 100,
})

estante.save().then(()=>{
    console.log("Guardado");
})