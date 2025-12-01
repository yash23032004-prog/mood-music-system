// backend/routes/mood.js
const express = require("express");
const db = require("../db");
const router = express.Router();

router.get("/select", (req, res) => {
  if (!req.session.user) return res.redirect("/auth/login");
  res.render("home");
});

router.post("/songs", (req, res) => {
  if (!req.session.user) return res.redirect("/auth/login");
  const mood = (req.body.mood || "").toLowerCase().trim();

  db.query("SELECT * FROM songs WHERE mood = ?", [mood], (err, songs) => {
    if (err) throw err;
    res.render("mood", { mood, songs });
  });
});

module.exports = router;
