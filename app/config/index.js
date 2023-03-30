// ----------------------------------------------
// index.js
// ----------------------------------------------
// Exportings all configurations.
// It this file, we export all configs that created it directories.

import databaseConfig from "$config/database/database.config.js";
import fileConfig from "$config/file/file.config.js";
import appConfig from "$config/app/app.config.js";

export { appConfig, databaseConfig, fileConfig };
