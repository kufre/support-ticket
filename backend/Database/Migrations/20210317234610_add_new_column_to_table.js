/**
 * Migration layout file.
 * Assign your table name to the tableName variable.
 * Remember, it's always in plural
 */
let tableName = "user";
exports.up = function (knex) {
  return knex.schema.table(tableName, (table) => {
    table.integer('role_id').unsigned()
    table.foreign("role_id").references("id").inTable("role");
  });
};

exports.down = function (knex) {
  return knex.schema.dropColumn('role_id');
};
