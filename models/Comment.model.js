const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const commentSchema = new Schema({
    date:     {type: Date, default: Date.now },
    userId:   {type: String },
    content:  {type: String },
    project: { type: Schema.Types.ObjectId, ref: "Project" },
});

module.exports = model("Comment", taskSchema);
