const knex = require("../db/knex");

exports.addCustomerToTtime = (req, res) => {
  knex("customers-ttimes")
    .insert(req.body)
    .returning("*")
    .then(newAddition => res.json(newAddition));
};

exports.removeCustomerFromTtime = (req, res) => {
  knex("customers-ttimes")
    .del()
    .where("id", req.params.id)
    .returning("*")
    .then(removedRez => res.json(removedRez));
};
