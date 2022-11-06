import { mongodb } from "$connections/index.js";

import mongoose from "mongoose";

const schemaModel = {
  from: {
    type: String,
    unique: false,
    required: false,
    default: "",
  },
};

const mongooseSchema = mongoose.Schema;
const schema = new mongooseSchema(schemaModel);

export default mongodb.model("View", schema);
