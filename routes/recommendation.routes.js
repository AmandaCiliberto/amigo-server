const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const fileUploader = require("../config/cloudinary.config");

const Recommendation = require("../models/Recommendation.model");
const Comment = require("../models/Comment.model");

// POST "/api/upload" => Route that receives the image, sends it to Cloudinary via the fileUploader and returns the image URL
router.post("/upload", fileUploader.single("imageUrl"), (req, res, next) => {
  // console.log("file is: ", req.file)
  if (!req.file) {
    next(new Error("No file uploaded!"));
    return;
  }
  // Get the URL of the uploaded file and send it as a response.
  // 'fileUrl' can be any name, just make sure you remember to use the same when accessing it on the frontend
  res.json({ imageUrl: req.file.path });
});

//  POST /api/recommendatios  -  Creates a new recommendation
router.post(
  "/recommendations", 
  (req, res, next) => {
    const { userId, content, imageUrl, location } = req.body;
    console.log('userId: ')
    console.log(userId)

    Recommendation.create({ userId, content, imageUrl, location, comment: [] })
      .then((createdRecommendation) => {
        // console.log('Created new recommendation: ', createdRecommendation);
        res.status(200).json(createdRecommendation);
      })
      .catch((err) => res.json(err));
  }
);

//  GET /api/recommendations -  Retrieves all of the recommendations
router.get("/recommendations", (req, res, next) => {
console.log('inside get recos');

  Recommendation.find()
    .populate("comment")
    .then((allRecommendations) => {
      // console.log("Testing");
      // console.log(allRecommendations);
      res.status(200).json(allRecommendations);
      })
    .catch((err) => res.json(err));
});

//  GET /api/recommendations/:recoId -  Retrieves a specific reco by id
router.get("/recommendations/:recommendationId", (req, res, next) => {
  const { recommendationId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(recommendationId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  // Each Reco document has `comments` array holding `_id`s of Comment documents
  // We use .populate() method to swap the `_id`s for the actual Comment documents
  Recommendation.findById(recommendationId)
    .populate("comment")
    .then((recommendation) => res.status(200).json(recommendation))
    .catch((error) => res.json(error));
});

// PUT  /api/recommendations/:recommendationId  -  Updates a specific reco by id
router.put("/recommendations/:recommendationId",  (req, res, next) => {
  const { recommendationId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(recommendationId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Recommendation.findByIdAndUpdate(recommendationId, req.body, { new: true })
    .then((updatedRecommendation) => res.json(updatedRecommendation))
    .catch((error) => res.json(error));
});

// DELETE  /api/recommendations/:recoId  -  Deletes a specific reco by id
router.delete("/recommendations/:recommendationId", (req, res, next) => {
  const { recommendationId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(recommendationId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Recommendation.findByIdAndRemove(recommendationId)
    .then(() =>
      res.json({
        message: `Recommendation with ${recommendationId} is removed successfully.`,
      })
    )
    .catch((error) => res.json(error));
});

module.exports = router;
