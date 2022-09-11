const Data = require("../models/data");

exports.readData((req, res) => {
    Data.find().exec((err, datas) => {
        if(err) {
            return res.status(400).json({
                error: "NO categories in DB."
            });
        }
        res.json({datas});
    });
});