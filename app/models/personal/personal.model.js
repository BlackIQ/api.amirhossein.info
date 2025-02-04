import { mongo } from "$app/connections/index.js";

import mongoose from "mongoose";
const mongooseSchema = mongoose.Schema;

export const schemaModel = {
  name: {
    type: String,
    default: null,
  },
  location: {
    type: String,
    default: null,
  },
  born: {
    type: Date,
    default: null,
  },
  job: {
    type: String,
    default: null,
  },
  current_place_of_work: {
    type: String,
    default: null,
  },
};

export const schema = new mongooseSchema(schemaModel, { timestamps: true });

export default mongo.model("PersonalInfo", schema);
