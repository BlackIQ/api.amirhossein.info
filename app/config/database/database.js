// ----------------------------------------------
// database.js
// ----------------------------------------------
// Database configuration.
// This time we only have mysql. Sometimes, we have MongoDB, SQLServer and stuff.
// We seperate connections. Like what we said.

import dotenv from "dotenv";
dotenv.config();

const env = process.env;

export default {
  mysql: {
    host: env.MYSQL_HOST,
    port: env.MYSQL_PORT,
    database: env.MYSQL_NAME,
    username: env.MYSQL_USERNAME,
    password: env.MYSQL_PASSWORD,
  },
  mongodb: {
    host: env.MONGO_HOST,
    port: env.MONGO_PORT,
    database: env.MONGO_NAME,
  },
  atlas: {
    url: env.ATLAS_URL,
  },
};
