const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Comment = require("../models/Comment.model");
const Reco = require("../models/Reco.model");

//  POST /api/comments  -  Creates a new comment
router.post("/comments", (req, res, next) => {
  const { date, userId, content, recoId } = req.body;

  Comment.create({ date, userId, content, reco: recoId })
    .then((newComment) => {
      return Reco.findByIdAndUpdate(recoId, {
        $push: { comment: newComment._id },
      });
    })
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

module.exports = router;
