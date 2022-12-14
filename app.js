const express = require("express");
const app = express();
const port = process.env.PORT || 3002;
const data = [
  { id: 1, name: "murat", age: 32 },
  { id: 2, name: "ahmet", age: 32 },
];

app.get("/", function (req, res) {
  res.send(data);
});

app.get("/:id", function (req, res) {
  let id = req.params.id;
  let dataById = data.find((object) => object.id == id);
  res.send(dataById);
});

app.listen(port);
