const express = require("express");


const movieRouter = require('./routes/movie-router')
const app = express();
const cors = require("cors");
require("dotenv").config();

const connect = require("./configs/db");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));


app.use("",movieRouter);

app.use("/", (req, res) => {
  res.json({ message: "Hello" });
});

const port = process.env.PORT || 8000;

app.listen(port, async function () {
  try {
    await connect();
    console.log(`listening on port ${port}`);
  } catch (err) {
    console.log(err);
  }
});
