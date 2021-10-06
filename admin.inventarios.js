const mongoose = require("mongoose");
const Schema = mongoose.Schema; 

let admin_inventario_Schema = new Schema(
    {
        user:{
            type: String,
            required: true,
        },
        archivo: {
            type: Number,
            required: true,
        },
        archivo_name: {
            type: String,
            required: true,
        },
        tabla:{
            type: JSON,
            required:true,
        },
    },
    {
        collection:"admin_inventarios",
    }
);

module.exports = mongoose.model("Admin-inventarios", admin_inventario_Schema);