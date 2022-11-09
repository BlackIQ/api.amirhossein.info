import { mongodb } from "$connections/index.js";

import mongoose from "mongoose";

const schemaModel = {
  ip: {
    type: String,
    default: "-",
  },
};

const mongooseSchema = mongoose.Schema;
const schema = new mongooseSchema(schemaModel, { timestamps: true });

export default mongodb.model("Log", schema);
