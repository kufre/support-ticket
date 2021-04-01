/**
 * Migration layout file.
 * Assign your table name to the tableName variable.
 * Remember, it's always in plural
 */
let tableName = "ticketmanger";
exports.up = function (knex) {
  return knex.schema.createTable(tableName, (table) => {
    table.increments("id");
    table.integer("assign_by").unsigned().notNullable();
    table.integer("assign_to").unsigned().notNullable();
    table.string("status");
    table.foreign("assign_by").references("id").inTable("user");
    table.foreign("assign_to").references("id").inTable("user");
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable(tableName);
};
