import env from "$config/env/index.js";

export default {
  mongodb: {
    host: env.MONGO_HOST,
    port: env.MONGO_PORT,
    collection: env.MONGO_DATABASE,
  },
};
