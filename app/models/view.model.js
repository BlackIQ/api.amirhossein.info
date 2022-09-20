const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const viewModel = new Schema(
    {
        test: {
            type: String,
            unique: false,
            required: false,
            default: "",
        },
    },
    {
        timestamps: true,
    }
);

const View = mongoose.model("view", viewModel);

module.exports = View;