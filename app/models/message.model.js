const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const messageModel = new Schema(
    {
        name: {
            type: String,
            unique: false,
            required: true,
            default: "",
        },
        message: {
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

const Message = mongoose.model("message", messageModel);

module.exports = Message;