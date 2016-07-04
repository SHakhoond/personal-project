
exports.up = function(knex, Promise) {
  console.log('create table')

  return knex.schema.createTableIfNotExists('nissan', function(nissan) {
    nissan.increments('id')
    nissan.string('task')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('nissan').then(function () {
    console.log('todos table was dropped')
  })
};
