/**
 * Migration layout file.
 * Assign your table name to the tableName variable.
 * Remember, it's always in plural
 */
let tableName = "ticketconversation";
exports.up = function (knex) {
  return knex.schema.createTable(tableName, (table) => {
    table.increments("id");
    table.integer("ticketId").unsigned().notNullable();
    table.integer("userId").unsigned().notNullable();
    table.text("reply");
    table.foreign("ticketId").references("id").inTable("ticket");
    table.foreign("userId").references("id").inTable("user");
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable(tableName);
};