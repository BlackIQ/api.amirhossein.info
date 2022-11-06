import { mongodb } from "$connections/index.js";

import mongoose from "mongoose";

const schemaModel = {
  name: {
    type: String,
    unique: false,
    required: true,
    default: "",
  },
  message: {
    type: String,
    unique: false,
    required: true,
    default: "",
  },
};

const mongooseSchema = mongoose.Schema;
const schema = new mongooseSchema(schemaModel);

export default mongodb.model("Message", schema);
