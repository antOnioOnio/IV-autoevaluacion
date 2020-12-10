"use strict";

var express = require('express');

var app = express();
var port = 3000;
app.get('/', function (req, res) {
  res.send({
    "HALO": "Welcome to the landing page"
  });
});
var perfectPlayer = {
  "velocidad": "infinita",
  "edad": "inmortal",
  "poder": "ilimitado"
};
app.get('/Player', function (req, res) {
  res.send(perfectPlayer);
});
module.exports = app;