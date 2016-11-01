
exports.seed = function(knex, Promise) {
 // Deletes ALL existing entries
 return knex('author').del()
   .then(function () {
     return Promise.all([
       // Inserts seed entries
       knex('author').insert({ first_name: 'J.K.', last_name: 'Rowling' }),
       knex('author').insert({ first_name: 'Louis', last_name: 'Sachar' }),
       knex('author').insert({ first_name: 'Kyle', last_name: 'Coberly' }),
       knex('author').insert({ first_name: 'Danny', last_name: 'Fritz' }),
       knex('author').insert({ first_name: 'CJ', last_name: 'Reynolds' }),
       knex('author').insert({ first_name: 'Stephen', last_name: 'Hawking' })
     ]);
   });
};
