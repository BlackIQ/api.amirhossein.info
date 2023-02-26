// ----------------------------------------------
// redis.connection.js
// ----------------------------------------------
// Redis connection.
// It this case we have no important cerditional for Redis.
// Just create the Redis connection and use it.

import redis from "ioredis";

const client = new redis();

export default client;
