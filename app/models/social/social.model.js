import { MongoDB } from "$connections";
import mongoose from "mongoose";

const Schema = mongoose.Schema;

// Define the schema for social media links
const socialMediaSchema = new Schema({
  label: String,
  url: String,
});

export default MongoDB.model("Social", socialMediaSchema);
