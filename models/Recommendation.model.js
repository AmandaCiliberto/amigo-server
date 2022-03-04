const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const recommendationSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User" }, //user id from frontend
    content: String,
    imageUrl: String,
    location: String,
    comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
  },
  {
    timestamps: true,
  }
);

module.exports = model("Recommendation", recommendationSchema);
