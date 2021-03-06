require("dotenv/config");
require("./db");
const express = require("express");

const { isAuthenticated } = require("./middleware/jwt.middleware");

const app = express();

require("./config")(app);

// 👇 Start handling routes here
const allRoutes = require("./routes/index");
app.use("/", allRoutes);

const recommendationRouter = require("./routes/recommendation.routes");
app.use("/api", recommendationRouter);

const commentRouter = require("./routes/comment.routes");
app.use("/api", isAuthenticated, commentRouter);

const authRouter = require("./routes/auth.routes"); 
app.use("/auth", authRouter);

require("./error-handling")(app);

module.exports = app;
