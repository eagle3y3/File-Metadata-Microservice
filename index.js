const express  = require("express");
const app = express();
const bodyParser = require("body-parser");
const multer = require("multer");
var upload = multer({ dest: 'uploads/' });
const portNumber = process.env.PORT || '3000';
app.use(express.static(__dirname + "/views"));
app.use(bodyParser.json())

app.get("/", (req, res) => {
  res.sendFile(__dirname + "views/index.html");
});

app.listen(portNumber, (req, res) => {
  console.log(`We're live at ${portNumber}!`);
});

app.post("/upload", upload.single("file"), (req, res, next) => {
  return res.json(req.file);
});
