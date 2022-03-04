const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Comment = require("../models/Comment.model");
const Recommendation = require("../models/Recommendation.model");

//  POST /api/comments  -  Creates a new comment
router.post("/comments", (req, res, next) => {
  const { date, userId, content, recommendationId } = req.body;

  Comment.create({ date, userId, content, recommendationId })
    .then((newComment) => {
      return Recommendation.findByIdAndUpdate(recommendationId, {
        $push: { comment: newComment._id },
      });
    })
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

module.exports = router;
