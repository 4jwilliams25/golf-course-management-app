const { Model } = require("objection");

class Customer extends Model {
  static get tableName() {
    return "customers";
  }
  static get relationMappings() {
    const Ttime = require("./ttimes");

    return {
      ttimes: {
        relation: Model.ManyToManyRelation,
        modelClass: Ttime,
        join: {
          from: "customers.id",
          through: {
            from: "customers-ttimes.customer_id",
            to: "customers-ttimes.tee_time_id"
          },
          to: "ttimes.id"
        }
      }
    };
  }
  static get jsonSchema() {
    return {
      type: "object",
      required: ["name", "company", "address", "phone", "email", "ttimes"],

      properties: {
        id: { type: "integer" },
        name: { type: "string", minLength: 1, maxLength: 255 },
        company: { type: "string", minLength: 1, maxLength: 255 },
        address: { type: "string", minLength: 1, maxLength: 255 },
        phone: { type: "string", minLength: 1, maxLength: 255 },
        email: { type: "string", minLength: 1, maxLength: 255 }
      }
    };
  }
}

module.exports = Customer;
