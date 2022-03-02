const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const recoSchema = new Schema({
  author: String,
  content: String,
  timestamps: true,
  /* image:  , */
  location: String,
  comemnts: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
});

module.exports = model("Reco", recoSchema);
