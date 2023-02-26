// ----------------------------------------------
// file.js
// ----------------------------------------------
// File configs for file middleware.
// There is a middleware to log all requests in a file.
// Here is required configs. Like path and name of the file.

import dotenv from "dotenv";
dotenv.config();

const env = process.env;

export default {
  filePath: env.FILE_PATH,
  fileName: env.FILE_NAME,
};
