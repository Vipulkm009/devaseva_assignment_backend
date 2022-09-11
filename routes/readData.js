const express = require("express");
const router = express.Router();

const { readData } = require("../controllers/readData");

router.get("/readData", readData);

module.exports = router;