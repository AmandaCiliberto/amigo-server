const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Reco = require("../models/Reco.model");
const Comment = require("../models/Comment.model");

//  POST /api/recos  -  Creates a new reco
router.post("/recos", (req, res, next) => {
  const {
    author,
    content,
    imageUrl,
    location,
    comment: [],
  } = req.body;

  Reco.create({ author, content, imageUrl, location, comment: [] })
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

//  GET /api/recos -  Retrieves all of the recos
router.get("/recos", (req, res, next) => {
  Reco.find()
    .populate("comment")
    .then((allRecos) => res.json(allRecos))
    .catch((err) => res.json(err));
});

//  GET /api/recos/:recoId -  Retrieves a specific reco by id
router.get("/recos/:recoId", (req, res, next) => {
  const { recoId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(recoId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  // Each Reco document has `comments` array holding `_id`s of Comment documents
  // We use .populate() method to swap the `_id`s for the actual Comment documents
  Reco.findById(recoId)
    .populate("comment")
    .then((reco) => res.status(200).json(reco))
    .catch((error) => res.json(error));
});

// PUT  /api/recos/:recoId  -  Updates a specific reco by id
router.put("/recos/:recoId", (req, res, next) => {
  const { recoId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(recoId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Reco.findByIdAndUpdate(recoId, req.body, { new: true })
    .then((updatedReco) => res.json(updatedReco))
    .catch((error) => res.json(error));
});

// DELETE  /api/recos/:recoId  -  Deletes a specific reco by id
router.delete("/recos/:recoId", (req, res, next) => {
  const { recoId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(recoId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Reco.findByIdAndRemove(recoId)
    .then(() =>
      res.json({
        message: `Recommendation with ${recoId} is removed successfully.`,
      })
    )
    .catch((error) => res.json(error));
});

module.exports = router;
