const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

dotenv.config();
const app = express();

const emp = require("./routes/api/emp");

//body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//connect to mongodb throug mongoose
mongoose
  .connect(process.env.DB)
  .then(() => console.log("Connected to db"))
  .catch((err) => console.log(err));

//routes
app.use("/api/emps", emp);

const port = 5000;
app.listen(port, () => console.log(`Server running on ${port}`));
