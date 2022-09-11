const express = require("express");
const router = express.Router();

const { addFruit, addVegetable } = require("../controllers/addData");

router.post("/addFruit", addFruit);
router.post("/addVegetable", addVegetable);

module.exports = router;