// ----------------------------------------------
// index.js
// ----------------------------------------------
// Exportings all configurations.
// It this file, we export all configs that created it directories.

import databaseConfig from "$config/database/database.js";
import fileConfig from "$config/file/file.config.js";
import appConfig from "$config/app/app.js";

export { appConfig, databaseConfig, fileConfig };
