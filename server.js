const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

// Pages
app.get("/", (req, res) => res.render("dashboard"));
app.get("/commands", (req, res) => res.render("commands"));
app.get("/execute", (req, res) => res.render("execute"));

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
