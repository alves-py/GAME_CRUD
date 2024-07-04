// src/migrations/{timestamp}_create_games_table.js

exports.up = function (knex) {
  return knex.schema.createTable("games", function (table) {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.text("description").notNullable();
    table.string("genre").notNullable();
    table.string("platform").notNullable();
    table.timestamps(true, true); // created_at e updated_at
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("games");
};
