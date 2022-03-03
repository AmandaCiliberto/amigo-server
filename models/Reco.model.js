const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const recoSchema = new Schema(
  {
    author: String,
    content: String,
    imageUrl: String,
    location: String,
    comment: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
  },
  {
    timestamps: true,
  }
);

module.exports = model("Reco", recoSchema);
