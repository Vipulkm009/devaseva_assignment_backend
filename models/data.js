const mongoose = require("mongoose");
const { Schema } = mongoose;

const DataSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        maxLength: 32
    },
    category: {
        type: String,
        trim: true,
        required: true,
        maxLength: 32
    },
}, {
    timestamps: true
});

module.exports = mongoose.model("Data", DataSchema);