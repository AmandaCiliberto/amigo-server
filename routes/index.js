const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json("Welcome to Amigo's API");
});

/* router.get("/upload", (req, res, next) => {
  res.json("upload files here");
}); */

module.exports = router;
