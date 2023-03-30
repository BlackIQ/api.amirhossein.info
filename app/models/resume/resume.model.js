import { MongoDB } from "$connections";
import mongoose from "mongoose";

const Schema = mongoose.Schema;

// Define the schema for resumes
const resumeSchema = new Schema({
  name: String,
  url: String,
});

export default MongoDB.model("Resume", resumeSchema);
