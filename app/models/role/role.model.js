import { mongo } from "$app/connections/index.js";

import mongoose from "mongoose";
const mongooseSchema = mongoose.Schema;

export const schemaModel = {
  label: {
    type: String,
    default: null,
  },
  value: {
    type: String,
    default: null,
  },
  permissions: [
    {
      type: mongooseSchema.Types.ObjectId,
      ref: "Permission",
      default: [],
    },
  ],
};

export const schema = new mongooseSchema(schemaModel, { timestamps: true });

export default mongo.model("Role", schema);
