const Fruit = require("../models/fruit");
const Vegetable = require("../models/vegetable");

exports.readFruits = (req, res) => {
    Fruit.find().exec((err, fruits) => {
        if(err) {
            return res.status(400).json({
                error: "NO data in DB."
            });
        }
        res.json({fruits});
    });
};

exports.readVegetables = (req, res) => {
    Vegetable.find().exec((err, vegetables) => {
        if(err) {
            return res.status(400).json({
                error: "NO data in DB."
            });
        }
        res.json({vegetables});
    });
};

exports.readAll = (req, res) => {
    var fruits;
    Fruit.find().exec((err, data) => {
        if(err) {
            return res.status(400).json({
                error: "NO data in DB."
            });
        }
        fruits = data;
    });
    Vegetable.find().exec((err, vegetables) => {
        if(err) {
            return res.status(400).json({
                error: "NO data in DB."
            });
        }
        res.json({data, vegetables});
    });
};