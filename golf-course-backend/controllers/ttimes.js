const knex = require("../db/knex");
const Ttime = require("../models/ttimes");

exports.getAllTtimes = (req, res) => {
  Ttime.query()
    .eager("customers")
    .then(ttimes => res.json(ttimes));
};

exports.getOneTtime = (req, res) => {
  Ttime.query()
    .findById(req.params.id)
    .eager("customers")
    .then(ttime => res.json(ttime));
};

exports.addTtime = (req, res) => {
  Ttime.query()
    .insert(req.body)
    .returning("*")
    .then(newTtime => res.json(newTtime))
    .catch(err => res.json(err));
};

exports.updateTtime = (req, res) => {
  Ttime.query()
    .findById(req.params.id)
    .patch({
      ...req.body,
      updated_at: new Date()
    })
    .returning("*")
    .then(updatedTtime => res.json(updatedTtime))
    .catch(err => res.json(err));
};

exports.removeTtime = (req, res) => {
  Ttime.query()
    .deleteById(req.params.id)
    .returning("*")
    .then(removedTtime => res.json(removedTtime));
};
