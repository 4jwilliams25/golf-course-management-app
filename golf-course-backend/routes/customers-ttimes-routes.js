const express = require("express");
const router = express.Router();
const customers_ttimesController = require("../controllers/customers-ttimes");

router.get("/cTtimes", customers_ttimesController.getAllCustomerTtimes);
router.post("/customers/ttimes", customers_ttimesController.addCustomerToTtime);
router.delete(
  "/customers/ttimes/:id",
  customers_ttimesController.removeCustomerFromTtime
);

module.exports = router;
