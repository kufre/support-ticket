/**
 * Migration layout file.
 * Assign your table name to the tableName variable.
 * Remember, it's always in plural
 */
let tableName = "ticket";
exports.up = function (knex) {
  return knex.schema.createTable(tableName, (table) => {
    table.increments("id");
    table.integer("issueId").unsigned().notNullable();
    table.integer("userId").unsigned().notNullable();
    table.string("subject");
    table.text("message");
    table.string("flag");
    table.string("status");
    table.foreign("issueId").references("id").inTable("issue");
    table.foreign("userId").references("id").inTable("user");
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable(tableName);
};
