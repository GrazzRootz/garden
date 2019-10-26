const { equipment_data, gardens_data, plants_data } = require('../data');

exports.seed = (connection, Promise) => {
  return connection.migrate
    .rollback()
    .then(() => connection.migrate.latest())
    .then(() => {
      return connection.insert(gardens_data).into('gardens');
    })
    .then(() => {
      return connection.insert(equipment_data).into('equipment');
    })
    .then(() => {
      return connection
        .insert(plants_data)
        .into('plants')
        .returning('*');
    });
};
