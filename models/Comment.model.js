const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const commentSchema = new Schema({
    date:     { type: Date, default: Date.now },
    userId:   { type: Schema.Types.ObjectId, ref: "User" },
    content:  {type: String },
    recommendationId: { type: Schema.Types.ObjectId, ref: "Recommendation" },
});

module.exports = model("Comment", commentSchema);
