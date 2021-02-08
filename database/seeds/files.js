exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('files').del()
    .then(function () {
      // Inserts seed entries
      return knex('files').insert([
        {id: 1, name: 'beach.jpg',},
      ]);
    });
};
