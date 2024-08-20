const Fruit = require("../models/fruit");
const Vegetable = require("../models/vegetable");

exports.addFruit = (req, res) => {
    const fruit = new Fruit(req.body);
    fruit.save((err, fruit) => {
        if (err) {
            return res.status(400).json({
                error: "NOT able to save Fruit in DB."
            });
        }
        res.json({ fruit });
    });
};

exports.addVegetable = (req, res) => {
    const vegetable = new Vegetable(req.body);
    vegetable.save((err, vegetable) => {
        if (err) {
            return res.status(400).json({
                error: "NOT able to save Vegetable in DB."
            });
        }
        res.json({ vegetable });
    });
};