const express = require("express");
const router = express.Router();

const { addData } = require("../controllers/addData");

router.post("/addData", addData);

module.exports = router;