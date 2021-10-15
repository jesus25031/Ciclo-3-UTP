const mongoose = require("mongoose");
const Schema = mongoose.Schema;
    

//inventario
//fecha
//hora
//operario
//producto
//cantidad
//total

let actividadSchema = new Schema(
    {
        user:{
            type: String,
            required: true
        },  
        Fecha:{
            type: String,
            required: true,
        },
        Hora:{
            type: String,
            required: true,
        },
        Operario:{
            type: String,
            required: true,
        },
        Producto:{
            type: String,
            required: true,
        },
        Cantidad:{
            type: String,
            required: true,
        },
        Total:{
            type: Number,
            required: true,
        },

    },
);

module.exports = mongoose.model("Actividad", actividadSchema);
