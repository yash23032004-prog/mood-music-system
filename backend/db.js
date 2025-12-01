// backend/db.js
const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",    // <-- set your MySQL password
  database: "mood_music"
});

db.connect((err) => {
  if (err) {
    console.error("MySQL connection error:", err.message);
    process.exit(1);
  }
  console.log("✅ MySQL connected");
});

module.exports = db;
