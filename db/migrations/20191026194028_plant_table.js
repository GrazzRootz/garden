exports.up = function(connection) {
  return connection.schema.createTable('plants', plantsTable => {
    plantsTable.string('plant_name').primary();
    plantsTable.integer('quantity');
    plantsTable.string('garden');
    plantsTable
      .foreign('garden')
      .references('garden_name')
      .inTable('gardens');
  });
};

exports.down = function(connection) {
  return connection.schema.dropTable('plants');
};
