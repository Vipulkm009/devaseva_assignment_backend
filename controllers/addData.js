const Data = require("../models/data");

exports.addData = (req, res) => {
    const data = new Data(req.body);
    data.save((err, data) => {
        if(err) {
            return res.status(400).json({
                error: "NOT able to save category in DB."
            });
        }
        res.json({data});
    });
};