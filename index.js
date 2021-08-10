const express = require("express");
const formidableMiddleware = require("express-formidable");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");

mongoose.connect("mongodb://localhost/airbnb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

const app = express();
app.use(formidableMiddleware());
app.use(cors());

const userRoutes = require("./routes/users");
app.use(userRoutes);

app.get("/", (req, res) => {
  res.status(200).json("Welcome on the AirBnb APP");
});

app.all("*", (req, res) => {
  res.status(400).json({ message: "Page not found !" });
});

app.listen(4000, () => {
  console.log("Server started !");
});
