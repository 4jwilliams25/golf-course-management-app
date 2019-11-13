const express = require("express");
const router = express.Router();
const ttimesController = require("../controllers/ttimes");

router.get("/ttimes", ttimesController.getAllTtimes);
router.get("/ttimes/:id", ttimesController.getOneTtime);
router.post("/ttimes", ttimesController.addTtime);
router.patch("/ttimes/:id", ttimesController.updateTtime);
router.delete("/ttimes/:id", ttimesController.removeTtime);

module.exports = router;
