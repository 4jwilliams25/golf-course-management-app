const express = require("express");
const router = express.Router();
const customersController = require("../controllers/customers");

router.get("/customers", customersController.getAllCustomers);
router.get("/customers/:id", customersController.getOneCustomer);
router.post("/customers", customersController.addCustomer);
router.patch("/customers/:id", customersController.updateCustomer);
router.delete("/customers/:id", customersController.removeCustomer);

module.exports = router;
