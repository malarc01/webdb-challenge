// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './database/gtd.db3'
    },
    useNullAsDefault: true //needed for SQl3
  },

  // gothca SQlite does not enforce Foreign Keys by default !!
  pool:{
    afterCreate: (connection, done) =>{
      connection.run('PRAGMA foreign_keys = ON ', done)
    }
  }
};
