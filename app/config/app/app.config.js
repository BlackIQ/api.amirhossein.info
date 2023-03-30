// ----------------------------------------------
// app.js
// ----------------------------------------------
// Application configurations.
// Here we export application data, like environment, is it published, port and stuff.

import env from "$env";

export default {
  environment: env.APP_ENVIRONMENT,
  port: env.APP_PORT,
  secret: env.APP_SECRET,
  key: env.APP_KEY,
  published: env.APP_ENVIRONMENT === "production" ? true : false,
};
