exports.up = function(knex, Promise) {
  return knex.schema.createTable("ttimes", table => {
    table.increments();
    table.string("time");
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("ttimes");
};
