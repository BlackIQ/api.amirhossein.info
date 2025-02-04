import { mongo } from "$app/connections/index.js";

import mongoose from "mongoose";
const mongooseSchema = mongoose.Schema;

export const schemaModel = {
  position: {
    type: String,
    default: null,
  },
  company_name: {
    type: String,
    default: null,
  },
  location: {
    type: String,
    default: null,
  },
  start_date: {
    type: String,
    default: null,
  },
  end_date: {
    type: String,
    default: null,
  },
  priority: {
    type: Number,
    default: null,
  },
  skills: [
    {
      type: mongooseSchema.Types.ObjectId,
      ref: "Skill",
      default: [],
    },
  ],
  duties: [
    {
      type: mongooseSchema.Types.ObjectId,
      ref: "Duty",
      default: [],
    },
  ],
};

export const schema = new mongooseSchema(schemaModel, { timestamps: true });

export default mongo.model("Experience", schema);
