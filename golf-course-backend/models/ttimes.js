const { Model } = require("objection");

class Ttime extends Model {
  static get tableName() {
    return "ttimes";
  }

  static get relationMappings() {
    const Customer = require("./customers");

    return {
      customers: {
        relation: Model.ManyToManyRelation,
        modelClass: Customer,
        join: {
          from: "ttimes.id",
          through: {
            from: "customers-ttimes.tee_time_id",
            to: "customers-ttimes.customer_id"
          },
          to: "customers.id"
        }
      }
    };
  }
  static get jsonSchema() {
    return {
      type: "object",
      required: ["time"],

      properties: {
        id: { type: "integer" },
        time: { type: "string", minLength: 3, maxLength: 255 }
      }
    };
  }
}

module.exports = Ttime;
