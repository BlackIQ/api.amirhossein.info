import { MongoDB } from "$connections";
import mongoose from "mongoose";

const Schema = mongoose.Schema;

// Define the schema for duties
const dutySchema = new Schema({
  name: String,
});

export default MongoDB.model("Duty", dutySchema);
