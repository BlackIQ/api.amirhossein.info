import mongoose from "mongoose";

import { databaseConfig } from "$config/index.js";

const { atlas } = databaseConfig;

const url = atlas.url;

const connection = mongoose.createConnection(url, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Connected to Atlas.");
  }
});

export default connection;
