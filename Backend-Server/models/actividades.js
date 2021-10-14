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
            type: JSON,
            required: true,
        },
        Hora:{
            type: JSON,
            required: true,
        },
        Operario:{
            type: String,
            required: true,
        },
        Producto:{
            type: JSON,
            required: true,
        },
        Cantidad:{
            type: JSON,
            required: true,
        },
        Total:{
            type: JSON,
            required: true,
        },

    },
);

module.exports = mongoose.model("Actividad", actividadSchema);
