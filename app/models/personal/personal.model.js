import { MongoDB } from "$connections";
import mongoose from "mongoose";

const Schema = mongoose.Schema;

// Define the schema for personal information
const personalInfoSchema = new Schema({
  name: String,
  location: String,
  born: Date,
  job: String,
  current_place_of_work: String,
});

export default MongoDB.model("PersonalInfo", personalInfoSchema);
