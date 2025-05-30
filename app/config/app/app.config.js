import env from "$app/env/index.js";

export default {
  environment: env.APP_ENVIRONMENT,
  port: env.APP_PORT,
  key: env.APP_KEY,
  published: env.APP_ENVIRONMENT === "production" ? true : false,
};
