const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const path = require("path");

dotenv.config();
const app = express();

const emp = require("./routes/api/emp");
const port = process.env.PORT || 5000;

//body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//connect to mongodb throug mongoose
mongoose
  .connect(process.env.MONGODB_URI || process.env.DB)
  .then(() => console.log("Connected to db"))
  .catch((err) => console.log(err));

//routes
app.use("/api/emps", emp);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("./client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html")); //relative file
  });
}

app.listen(port, () => console.log(`Server running on ${port}`));
