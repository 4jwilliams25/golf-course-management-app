exports.up = function(knex, Promise) {
  return knex.schema.createTable("customers-ttimes", table => {
    table.increments();
    table
      .integer("customer_id")
      .references("id")
      .inTable("customers")
      .onDelete("cascade")
      .notNullable();
    table
      .integer("tee_time_id")
      .references("id")
      .inTable("ttimes")
      .onDelete("cascade")
      .notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("customers-ttimes");
};
