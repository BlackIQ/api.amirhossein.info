// ----------------------------------------------
// mysql.connection.js
// ----------------------------------------------
// MySQL connection.
// Ok, We have a database configuration that explaned it /config/database directory.
// Use the cerditional to create a connection.
// Then export the connection and use it to have connectivity with MySQL.

import Sequelize from "sequelize";

import { databaseConfig } from "$config/index.js";

const { mysql } = databaseConfig;

const MySQL = new Sequelize(mysql.database, mysql.username, mysql.password, {
  host: mysql.host,
  port: mysql.port,
  dialect: "mysql",
  logging: false,
  dialectOptions: {
    options: {
      encrypt: false,
      enableArithAbort: false,
    },
  },
});

export default MySQL;
