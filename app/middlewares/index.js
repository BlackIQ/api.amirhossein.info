// ----------------------------------------------
// index.js
// ----------------------------------------------
// Export all middlewares.
// As you know, we create the middlewared like ip, key, jwt and log.
// Then export them in this file.
// All done.

import key from "$middlewares/key/key.middleware.js";
import log from "$middlewares/log/log.middleware.js";
import ip from "$middlewares/ip/ip.middleware.js";

export { key, log, ip };
