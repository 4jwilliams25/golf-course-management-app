const knex = require("../db/knex");
const customerTtimes = require("../models/customers-ttimes");

exports.getAllCustomerTtimes = (req, res) => {
  customerTtimes.query().then(customerTtimes => {
    res.json(customerTtimes);
  });
};

exports.addCustomerToTtime = (req, res) => {
  customerTtimes
    .query()
    .insert(req.body)
    .returning("*")
    .then(newAddition => res.json(newAddition))
    .catch(err => res.json(err));
};

exports.removeCustomerFromTtime = (req, res) => {
  customerTtimes
    .query()
    .deleteById(req.params.id)
    .returning("*")
    .then(removedRez => res.json(removedRez))
    .catch(err => res.json(err));
};
