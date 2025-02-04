import { mongo } from "$app/connections/index.js";

import mongoose from "mongoose";
const mongooseSchema = mongoose.Schema;

export const schemaModel = {
  name: {
    type: String,
    default: null,
  },
  order: {
    type: Number,
    default: null,
  },
  parent: {
    type: mongooseSchema.Types.ObjectId,
    ref: "Skill",
    default: null,
  },
};

export const schema = new mongooseSchema(schemaModel, { timestamps: true });

export default mongo.model("Skill", schema);
