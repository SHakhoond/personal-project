exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('todos').del(),

    // Inserts seed entries
    knex('todos').insert({brand: 'Honda', id: 1, task: 'Accord', color: 'black'}),
    knex('todos').insert({brand: 'Honda', id: 2, task: 'Jizz', color: 'white'}),
    knex('todos').insert({brand: 'Honda', id: 3, task: 'Torneo', color: 'yellow'}),
    knex('todos').insert({brand: 'Honda', id: 4, task: 'Civic', color: 'red'}),
    knex('todos').insert({brand: 'Nissan', id: 5, task: 'GTR', color: 'black'}),
    knex('todos').insert({brand: 'BMW', id: 6, task: 'M3', color: 'gray'}),
    knex('todos').insert({brand: 'Benz', id: 7, task: 's200', color: 'yellow'}),
    knex('todos').insert({brand: 'Alfa', id: 8, task: 'Shark', color: 'black'})
)};

