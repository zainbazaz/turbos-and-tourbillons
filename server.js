const express = require("express");
const app = express();
const logger = require("morgan");
const mainRoutes = require("./routes/main");

//Use .env file in config folder
require("dotenv").config({ path: "./config/.env" });

//Static Folder
app.use(express.static("public"));

//Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Using EJS for views
app.set("view engine", "ejs");

//Logging
app.use(logger("dev"));

//Routes
app.use("/", mainRoutes);

//Server running
app.listen(process.env.PORT, () => console.log("Server Running"));
