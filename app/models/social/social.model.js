import { MongoDB } from "$connections";
import mongoose from "mongoose";

const mongooseSchema = mongoose.Schema;

const schemaModel = {
  label: {
    type: String,
    default: "",
    required: true,
  },
  url: {
    type: String,
    default: "",
    required: true,
  },
};

const schema = new mongooseSchema(schemaModel, {
  timestamps: true,
});

export default MongoDB.model("Social", schema);
