exports.up = function(knex, Promise) {
  return knex.schema.createTable('book', function(table) {
    table.increments();
    table.string('title');
    table.string('description');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('book');
};
