// Dependecies
const path = require("path");
const bodyParser = require("body-parser");
const express = require("express");
var exphbs = require("express-handlebars");
const axios = require("axios");
const mongoose = require('mongoose');
const cheerio = require("cheerio");
const logger = require('morgan');

// Initialize Express
const app = express();
const PORT = 3000;

// Connect Routes
const routes = require("./routes/routes.js");
app.use(routes);

// Set Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Configure middleware
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/scraperDB", { useNewUrlParser: true });


// Start Server
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});