import mongoose from "mongoose";

import { databaseConfig, appConfig } from "$config/index.js";

const { mongodb } = databaseConfig;

const url = appConfig.published
  ? mongodb.atlas
  : `mongodb://${mongodb.host}:${mongodb.port}/${mongodb.database}`;

const connection = mongoose.createConnection(url, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Connected to mongodb.");
  }
});

export default connection;
