const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Comment = require("../models/Comment.model");
const Project = require("../models/Project.model");

//  POST /api/tasks  -  Creates a new task
router.post("/comments", (req, res, next) => {
  const { title, description, projectId } = req.body;

  Task.create({ title, description, project: projectId })
    .then((newTask) => {
      return Project.findByIdAndUpdate(projectId, {
        $push: { tasks: newTask._id },
      });
    })
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

module.exports = router;
