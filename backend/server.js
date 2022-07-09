const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const morgan = require("morgan");

app.use(morgan("tiny"));
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.post("/", (req, res) => {
  res.send("good post!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
