exports.up = function(connection) {
  return connection.schema.createTable('gardens', gardensTable => {
    gardensTable.uuid('garden_uuid');
    gardensTable.string('garden_name').primary();
    gardensTable.string('soil_ph');
  });
};

exports.down = function(connection) {
  return connection.schema.dropTable('gardens');
};
