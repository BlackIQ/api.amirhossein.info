import { MongoDB } from "$connections";
import mongoose from "mongoose";

const Schema = mongoose.Schema;

// Define the schema for duties
const noteSchema = new Schema(
  {
    title: String,
    details: String,
    content: String,
    private: Boolean,
  },
  { timestamps: true }
);

export default MongoDB.model("Note", noteSchema);
