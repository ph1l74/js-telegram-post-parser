const express = require("express");
const cors = require("cors");
const app = express();
const config = require("dotenv").config();
const postsRouter = require("./routes/posts.routes");
const port = process.env.APP_PORT || 8080;

app.use(cors());

app.use("/post", postsRouter);

app.get("*", (req, res) => {
  res.sendStatus(404);
});

const service = app.listen(port, () => {
  console.log(`Service is running on port ${port}`);
});
