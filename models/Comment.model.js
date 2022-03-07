const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const commentSchema = new Schema(
  {
    date: { type: Date, default: Date.now },
    creator: { type: Schema.Types.ObjectId, ref: "User" },
    content: { type: String },
    recommendation: { type: Schema.Types.ObjectId, ref: "Recommendation" },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Comment", commentSchema);
