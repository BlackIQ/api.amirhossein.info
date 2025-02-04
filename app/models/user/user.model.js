import { mongo } from "$app/connections/index.js";

import mongoose from "mongoose";
const mongooseSchema = mongoose.Schema;

export const schemaModel = {
  name: {
    type: String,
    default: null,
  },
  username: {
    type: String,
    default: null,
  },
  password: {
    type: String,
    default: null,
  },
  role: {
    type: mongooseSchema.Types.ObjectId,
    ref: "Role",
    default: null,
  },
};

export const schema = new mongooseSchema(schemaModel, { timestamps: true });

export default mongo.model("User", schema);
