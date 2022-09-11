const express = require("express");
const router = express.Router();

const { readFruits, readVegetables, readAll } = require("../controllers/readData");

router.get("/getFruits", readFruits);
router.get("/getVegetables", readVegetables);
router.get("/getAll", readAll);

module.exports = router;