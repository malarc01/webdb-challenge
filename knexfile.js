// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './database/gtd.db3'
    },
    useNullAsDefault: true //needed for SQl3
  },

  
};
