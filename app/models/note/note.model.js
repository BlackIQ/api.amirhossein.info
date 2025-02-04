import { mongo } from "$app/connections/index.js";

import mongoose from "mongoose";
const mongooseSchema = mongoose.Schema;

export const schemaModel = {
  title: {
    type: String,
    default: null,
  },
  details: {
    type: String,
    default: null,
  },
  content: {
    type: String,
    default: null,
  },
  thumbnail: {
    type: String,
    default: null,
  },
};

export const schema = new mongooseSchema(schemaModel, { timestamps: true });

export default mongo.model("Note", schema);
