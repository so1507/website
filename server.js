const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "static")));
app.use(express.static(path.join(__dirname, "public")));

app.post("/", (req, res) => {
  res.status(200).send("hi");
});

app.listen(port, () => console.log(`Server has started on port: ${port}`));
