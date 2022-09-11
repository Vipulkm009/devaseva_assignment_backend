const express = require("express");
const router = express.Router();

const { addData } = require("../controllers/addData");

router.get("/addData", addData);

module.exports = router;