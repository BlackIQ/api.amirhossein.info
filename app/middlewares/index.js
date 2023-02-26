// ----------------------------------------------
// index.js
// ----------------------------------------------
// Export all middlewares.
// As you know, we create the middlewared like ip, key, jwt and log.
// Then export them in this file.
// All done.

import jwt from "$middlewares/jwt/jwt.middleware.js";
import key from "$middlewares/key/key.middleware.js";
import log from "$middlewares/log/log.middleware.js";
import ip from "$middlewares/ip/ip.middleware.js";

export { jwt, key, log, ip };
