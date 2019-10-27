exports.up = function(connection) {
  return connection.schema.createTable('gardens', gardensTable => {
    gardensTable.increments('garden_id').primary();
    gardensTable.string('garden_name');
    gardensTable.string('soil_ph');
    gardensTable.boolean('guerilla');
    gardensTable.decimal('latitude', 4);
    gardensTable.decimal('longitude', 4);
  });
};

exports.down = function(connection) {
  return connection.schema.dropTable('gardens');
};
