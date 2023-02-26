// ----------------------------------------------
// index.js
// ----------------------------------------------
// Exporting all databse connections.
// Like configs, create them in directories and export them here.

import MongoDB from "$connections/mongodb/mongodb.connection.js";
import MySQL from "$connections/mysql/mysql.connection.js";
import Redis from "$connections/redis/redis.connection.js";

export { MongoDB, MySQL, Redis };
