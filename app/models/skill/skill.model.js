import { MongoDB } from "$connections";
import mongoose from "mongoose";

const Schema = mongoose.Schema;

// Define the schema for skills
const skillSchema = new Schema({
  name: String,
  order: { type: Number, default: null },
  parent: { type: Schema.Types.ObjectId, ref: "Skill", default: null }, // Reference to parent skill
});

export default MongoDB.model("Skill", skillSchema);
