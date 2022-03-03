require("dotenv/config");
require("./db");
const express = require("express");

const { isAuthenticated } = require("./middleware/jwt.middleware");

const app = express();

require("./config")(app);

// 👇 Start handling routes here
const allRoutes = require("./routes");
app.use("/api", allRoutes);

const recoRouter = require("./routes/reco.routes");
app.use("/api", isAuthenticated, recoRouter);

const commentRouter = require("./routes/comment.routes");
app.use("/api", isAuthenticated, commentRouter);

const authRouter = require("./routes/auth.routes"); //  <== IMPORT
app.use("/auth", authRouter);

require("./error-handling")(app);

module.exports = app;
