const mongoose = require("mongoose");
const Schema = mongoose.Schema;
    
let adminSchema = new Schema(
    {
        user:{
            type: String,
            required: true,
        },

    },
);

module.exports = mongoose.model("Administrador", adminSchema);
