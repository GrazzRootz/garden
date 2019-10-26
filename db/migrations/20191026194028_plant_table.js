exports.up = function(connection) {
  return connection.schema.createTable('plants', plantsTable => {
    plantsTable.increments('plant_id').primary();
    plantsTable.string('plant_name');
    plantsTable.integer('quantity');
    plantsTable.integer('garden');
    plantsTable
      .foreign('garden')
      .references('garden_id')
      .inTable('gardens')
      .onDelete('CASCADE');
  });
};

exports.down = function(connection) {
  return connection.schema.dropTable('plants');
};
