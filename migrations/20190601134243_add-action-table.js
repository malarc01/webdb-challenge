
exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', column=>{
    column.increments() //unique id
    column.string('action-description',255).notNullable() //description of what needs to be done.
    column.string('notes',255).notNullable()
    column.boolean('completed') //flag that indicates if the action has been completed

    // added a foreign key
    column.integer('project_id').unsigned().references('id').inTable('projects')
    .onDelete('CASCADE')
    

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists()
};
