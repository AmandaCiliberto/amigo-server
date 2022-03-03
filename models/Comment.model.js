const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const commentSchema = new Schema({
    date:     {type: Date, default: Date.now },
    userId:   {type: String },
    content:  {type: String },
    reco: { type: Schema.Types.ObjectId, ref: "Reco" },
});

module.exports = model("Comment", commentSchema);
