exports.up = function(connection) {
  return connection.schema.createTable('equipment', equipmentTable => {
    equipmentTable.string('equipment_name').primary();
    equipmentTable.integer('quantity');
    equipmentTable.integer('garden');
    equipmentTable
      .foreign('garden')
      .references('garden_id')
      .inTable('gardens')
      .onDelete('CASCADE');
  });
};

exports.down = function(connection) {
  return connection.schema.dropTable('equipment');
};
