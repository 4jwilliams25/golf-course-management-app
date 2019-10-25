const express = require("express");
const router = express.Router();
const customers_ttimesController = require("../controllers/customers-ttimes");

router.post("/customers/ttimes", customers_ttimesController.addCustomerToTtime);
router.delete(
  "/customers/ttimes/:id",
  customers_ttimesController.removeCustomerFromTtime
);

module.exports = router;
