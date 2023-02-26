import app from "./app/index.js";

import { appConfig } from "$config/index.js";

app.listen(appConfig.port, async () => {
  console.log(`App is running on ${appConfig.port}`);
});
