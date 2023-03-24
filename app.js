// .get .send require
const express = require("express");
const app = express();

app.use("/public", express.static(__dirname + "/public"));

app.get("/home", (req, res) => {
  res.sendFile(__dirname + "/views/home.html");
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/views/aboutUs.html");
});

app.get("/works", (req, res) => {
  res.sendFile(__dirname + "/views/works.html");
});

app.listen(3000, () => console.log("My first app listening on port 3000! "));
