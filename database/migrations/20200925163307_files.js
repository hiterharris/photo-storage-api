exports.up = function(knex) {
    return knex.schema.createTable('files', files => {
      files.increments();
  
      files
          .string('name')
    });
  };
  
  exports.down = function(knex, Promise) {
      return knex.schema.dropTableIfExists('files');
    };
  