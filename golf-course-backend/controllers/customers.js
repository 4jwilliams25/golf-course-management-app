const knex = require("../db/knex");
const Customer = require("../models/customers");

// KNEX verison
// exports.getAllCustomers = (req, res) => {
//   knex("customers").then(customers => res.json(customers));
// };
exports.getAllCustomers = (req, res) => {
  Customer.query()
    .eager("ttimes")
    .then(customers => res.json(customers));
};

// KNEX version
// exports.getOneCustomer = (req, res) => {
//   knex("customers")
//     .where("id", req.params.id)
//     .then(customer => res.json(customer));
// };

exports.getOneCustomer = (req, res) => {
  Customer.query()
    .findById(req.params.id)
    .eager("ttimes")
    .then(customer => res.json(customer));
};

// KNEX Version; not really needed with Objection
// exports.getOneCustomersTtimes = (req, res) => {
//   knex("customers")
//     .join(
//       "customers-ttimes",
//       "customers-ttimes.customer_id",
//       "=",
//       "customers.id"
//     )
//     .where("customers.id", req.params.id)
//     .then(ttimes => res.json(ttimes));
// };

// KNEX version
// exports.addCustomer = (req, res) => {
//   knex("customers")
//     .insert(req.body)
//     .returning("*")
//     .then(newCustomer => res.json(newCustomer));
// };

exports.addCustomer = (req, res) => {
  Customer.query()
    .insert(req.body)
    .returning("*")
    .then(newCustomer => res.json(newCustomer))
    .catch(err => res.json(err));
};

exports.updateCustomer = (req, res) => {
  Customer.query()
    .findById(req.params.id)
    .patch({
      ...req.body,
      updated_at: new Date()
    })
    .returning("*")
    .then(updatedCustomer => res.json(updatedCustomer));
};

// KNEX Version
// exports.removeCustomer = (req, res) => {
//   knex("customers")
//     .del()
//     .where("id", req.params.id)
//     .returning("*")
//     .then(removedCustomer => res.json(removedCustomer));
// };

exports.removeCustomer = (req, res) => {
  Customer.query()
    .deleteById(req.params.id)
    .returning("*")
    .then(removedCustomer => res.json(removedCustomer));
};
