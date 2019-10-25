const knex = require("../db/knex");

exports.getAllCustomers = (req, res) => {
  knex("customers").then(customers => res.json(customers));
};

exports.getOneCustomer = (req, res) => {
  knex("customers")
    .where("id", req.params.id)
    .then(customer => res.json(customer));
};

exports.getOneCustomersTtimes = (req, res) => {
  knex("customers")
    .join(
      "customers-ttimes",
      "customers-ttimes.customer_id",
      "=",
      "customers.id"
    )
    .where("customers.id", req.params.id)
    .then(ttimes => res.json(ttimes));
};

exports.addCustomer = (req, res) => {
  knex("customers")
    .insert(req.body)
    .returning("*")
    .then(newCustomer => res.json(newCustomer));
};

exports.updateCustomer = (req, res) => {
  knex("customers")
    .update({
      ...req.body,
      updated_at: new Date()
    })
    .where("id", req.params.id)
    .returning("*")
    .then(updatedCustomer => res.json(updatedCustomer));
};

exports.removeCustomer = (req, res) => {
  knex("customers")
    .del()
    .where("id", req.params.id)
    .returning("*")
    .then(removedCustomer => res.json(removedCustomer));
};
