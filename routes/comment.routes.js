const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Comment = require("../models/Comment.model");
const Recommendation = require("../models/Recommendation.model");

//  POST /api/comments  -  Creates a new comment
router.post("/comments", (req, res, next) => {
  const { date, creator, content, recommendation } = req.body;
  console.log('req body post comments', req.body)

  Comment.create({ date, creator, content, recommendation })
    .then((newComment) => {
      return Recommendation.findByIdAndUpdate(recommendation, {
        $push: { comments: newComment._id },
      });
    })
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

//**** new - delete if not work*/
//  GET /api/comments -  Retrieves all of the comments
router.get("/comments/:recommendationId", (req, res, next) => {
  const recommendationId = req.params.recommendationId;
  console.log('recommendation id', recommendationId)

  Comment.find(recommendationId)
    .then((allComments) => {
      console.log("all comments", allComments);
      res.status(200).json(allComments);
    })
    .catch((err) => res.json(err));
});


module.exports = router;
