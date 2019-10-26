exports.up = function(connection) {
  return connection.schema.createTable('equipment', equipmentTable => {
    equipmentTable.string('equipment_name').primary();
    equipmentTable.integer('quantity');
    equipmentTable.string('garden');
    equipmentTable
      .foreign('garden')
      .references('garden_name')
      .inTable('gardens');
  });
};

exports.down = function(connection) {
  return connection.schema.dropTable('equipment');
};
