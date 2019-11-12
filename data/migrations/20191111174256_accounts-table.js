
exports.up = function(knex) {
  return knex.schema.createTable('accounts', accounts => {
      accounts.increment(); 

      accounts
        .string('username', 128)
        .notNullable()
        .unique(); 
      accounts.string('password', 128).notNullable(); 
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('accounts'); 
};
