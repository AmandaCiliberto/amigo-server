const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    name: { type: String, unique: true, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    imageUrl: String,
    givenRecommendations: [
      { type: Schema.Types.ObjectId, ref: "Recommendation" },
    ],
    likedRecommendations: [
      { type: Schema.Types.ObjectId, ref: "Recommendation" },
    ],
  },
  { timestamps: true }
);

module.exports = model("User", userSchema);
