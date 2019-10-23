const knex = require("../db/knex");

exports.getAllTtimes = (req, res) => {
  knex("ttimes").then(ttimes => res.json(ttimes));
};

exports.getOneTtime = (req, res) => {
  knex("ttimes")
    .where("id", req.params.id)
    .then(ttime => res.json(ttime));
};

exports.addTtime = (req, res) => {
  knex("ttimes")
    .insert(req.body)
    .returning("*")
    .then(newTtime => res.json(newTtime));
};

exports.updateTtime = (req, res) => {
  knex("ttimes")
    .update({
      ...req.body,
      updated_at: new Date()
    })
    .where("id", req.params.id)
    .returning("*")
    .then(updatedTtime => res.json(updatedTtime));
};

exports.removeTtime = (req, res) => {
  knex("ttimes")
    .del()
    .where("id", req.params.id)
    .returning("*")
    .then(removedTtime => res.json(removedTtime));
};
