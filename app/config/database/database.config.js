// ----------------------------------------------
// database.js
// ----------------------------------------------
// Database configuration.
// This time we only have mysql. Sometimes, we have MongoDB, SQLServer and stuff.
// We seperate connections. Like what we said.

import env from "$env";

export default {
  mongodb: {
    atlas: env.MONGO_ATLAS,
    host: env.MONGO_HOST,
    port: env.MONGO_PORT,
    database: env.MONGO_COLLECTION,
  },
};
