const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userModel = new Schema(
    {
        username: {
            type: String,
            unique: false,
            required: true,
            default: "",
        },
        password: {
            type: String,
            unique: false,
            required: true,
            default: "",
        },
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model("user", userModel);

module.exports = User;