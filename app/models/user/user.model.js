import { mongodb } from "$connections/index.js";

import mongoose from "mongoose";

const schemaModel = {
  username: {
    type: String,
    unique: false,
    required: true,
    default: "",
  },
  password: {
    type: String,
    unique: false,
    required: true,
    default: "",
  },
};

const mongooseSchema = mongoose.Schema;
const schema = new mongooseSchema(schemaModel);

export default mongodb.model("User", schema);
