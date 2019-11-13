const { Model } = require("objection");

class CustomerTtime extends Model {
  static get tableName() {
    return "customers-ttimes";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["customer_id", "tee_time_id"],

      properties: {
        id: { type: "integer" },
        customer_id: { type: "integer" },
        tee_time_id: { type: "integer" }
      }
    };
  }
}

module.exports = CustomerTtime;
