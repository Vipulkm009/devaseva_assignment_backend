const mongoose = require("mongoose");
const { Schema } = mongoose;

const VegetableSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        maxLength: 32
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Vegetable", VegetableSchema);