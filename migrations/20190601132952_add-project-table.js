
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects',column=>{
    //each table needs a primary key 
    // we call it id, integer , auto-increment
    column.increments(); //a unique Id.

    column.string('name',128 ).notNullable().unique(); //name
    column.string('description',255).notNullable() //description column
    column.boolean('completed') //flag that indicates if the project is complete or not.

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfItExists('projects')
};
