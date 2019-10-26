const DB_URL = 'postgres://eyopaoeia:password1@127.0.0.1:5432/garden_db';

const baseConfig = {
  client: 'pg',
  migrations: {
    directory: './db/migrations',
  },
  seeds: {
    directory: './db/seeds',
  },
};

const customConfigs = {
  development: {
    connection: {
      database: 'garden_db',
      username: 'eyopaoeia',
      password: 'password1',
    },
  },
  production: {
    connection: `${DB_URL}?ssl=true`,
  },
};

module.exports = { ...baseConfig, ...customConfigs['development'] };
