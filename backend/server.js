const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sqlite3 = require("sqlite3").verbose();
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/*const db = new sqlite3.Database("./database.sqlite", (err) => {
  if (err) {
    console.error("Error opening database:", err.message);
  } else {
    console.log("Connected to SQLite database.");
  }
});*/

let username = ""; // do not recommend global vars

app.post("/submit", (req, res) => {
    username = req.body.username || "";
    res.send(`e-mail from PhishBank: Hello, ${username}! Your OTP is 123-456`);
});

app.get("/flag", (req, res) => {
  const flag = "{ACCESS_GRANTED}"
  res.send(`${username}${flag}`);
});

app.listen(5000, () => console.log("Server running on port 5000"));

