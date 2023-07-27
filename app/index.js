const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const uploadController = require("./controllers/upload.controller");
const uploadImage = require("../helpers/upload.helper");
const cors = require("cors");

// Config CORS
var whitelist = ["http://localhost:4200"];
const app = express();

var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};
// app.use(cors(corsOptions));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.disable("x-powered-by");
app.use(uploadImage.multerMid.single("file"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/api/uploads", uploadController);

app.use((err, req, res, next) => {
  res.status(500).json({
    error: err,
    message: "Internal server error!",
  });
  next();
});

app.listen(3001, () => {
  console.log("app now listening for requests!!!");
});
