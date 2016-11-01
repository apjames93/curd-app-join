exports.seed = function(knex, Promise) {
 // Deletes ALL existing entries
 return knex('book').del()
   .then(function () {
     return Promise.all([
       // Inserts seed entries
       knex('book').insert({ title: 'Harry Potter', description: 'Wizard boy goes to school and becomes popular.' }),
       knex('book').insert({ title: 'A Brief History of Time', description: 'Introduction to space time, and how space works.' }),
       knex('book').insert({ title: 'Galvanize Eats', description: 'Funny book about how to eat food while you scream.' }),
       knex('book').insert({ title: 'Galvanize Curriculum', description: 'A cirriculum of assignments and activities for gSchool students.' }),
       knex('book').insert({ title: 'Holes', description: 'Shia Laboof does cool stuff and digs holes because he was bad.' })
     ]);
   });
};
