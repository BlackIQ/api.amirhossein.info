import { MongoDB } from "$connections";
import mongoose from "mongoose";

const Schema = mongoose.Schema;

// Define the schema for user
const userSchema = new Schema({
  name: String,
  username: String,
  password: String,
});

export default MongoDB.model("User", userSchema);
