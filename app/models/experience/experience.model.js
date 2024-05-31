import { MongoDB } from "$connections";
import mongoose from "mongoose";

const Schema = mongoose.Schema;

// Define the schema for social media links
const experienceSchema = new Schema({
  position: String,
  company_name: String,
  location: String,
  start_date: String,
  end_date: String,
  priority: Number,
  skills: [{ type: Schema.Types.ObjectId, ref: "Skill" }], // Reference to skills collection
  duties: [{ type: Schema.Types.ObjectId, ref: "Duty" }], // Reference to duties collection
});

export default MongoDB.model("Experience", experienceSchema);
