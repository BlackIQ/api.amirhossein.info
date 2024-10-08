// ----------------------------------------------
// database.js
// ----------------------------------------------
// Database configuration.
// This time we only have mysql. Sometimes, we have MongoDB, SQLServer and stuff.
// We seperate connections. Like what we said.

import env from "$env";

export default {
  mongodb: {
    host: env.MONGO_HOST,
    port: env.MONGO_PORT,
    database: env.MONGO_DATABASE,
    username: env.MONGO_USERNAME,
    password: env.MONGO_PASSWORD,
  },
};
