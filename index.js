const express = require("express");
const App = express();

App.get("/",(req,res) =>res.sendFile(__dirname + "/index.html"));

App.post("/",(req,res) => {
  var n1 = Number(req.body.n1);
  var n2 = Number(req.body.n2);
  var result = n1 + n2;
  res.send("The answer is " + result);
  });