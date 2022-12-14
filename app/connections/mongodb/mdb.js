import mongoose from "mongoose";

import { databaseConfig } from "$config/index.js";

const { mongodb } = databaseConfig;

const url = `mongodb://${mongodb.host}/${mongodb.collection}`;

console.log(url);

const connection = mongoose.createConnection(url, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Connected to mongodb.");
  }
});

export default connection;
