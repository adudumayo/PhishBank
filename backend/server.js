const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sqlite3 = require("sqlite3").verbose();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = new sqlite3.Database("./database.sqlite", (err) => {
  if (err) {
    console.error("Error opening database:", err.message);
  } else {
    console.log("Connected to SQLite database.");
  }
});


app.post("/submit", (req, res) => {
    const username = req.body.username || "";
  res.send(`e-mail from PhishBank: Hello, ${username}!`);
});

app.listen(5000, () => console.log("Server running on port 5000"));

