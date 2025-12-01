// backend/routes/auth.js
const express = require("express");
const bcrypt = require("bcrypt");
const db = require("../db");
const router = express.Router();

// show register form
router.get("/register", (req, res) => {
  res.render("register");
});

// register handler
router.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      req.flash("error", "All fields are required");
      return res.redirect("/auth/register");
    }

    // check if user exists
    db.query("SELECT * FROM users WHERE username = ?", [username], async (err, results) => {
      if (err) throw err;
      if (results.length > 0) {
        req.flash("error", "Username already taken");
        return res.redirect("/auth/register");
      }
      const hash = await bcrypt.hash(password, 10);
      db.query("INSERT INTO users (username, password) VALUES (?, ?)", [username, hash], (err) => {
        if (err) throw err;
        req.flash("success", "Registration successful. Login now.");
        res.redirect("/auth/login");
      });
    });
  } catch (e) {
    console.error(e);
    req.flash("error", "Something went wrong");
    res.redirect("/auth/register");
  }
});

// show login form
router.get("/login", (req, res) => {
  res.render("login");
});

// login handler
router.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    req.flash("error", "All fields are required");
    return res.redirect("/auth/login");
  }

  db.query("SELECT * FROM users WHERE username = ?", [username], async (err, results) => {
    if (err) throw err;
    if (results.length === 0) {
      req.flash("error", "Invalid username or password");
      return res.redirect("/auth/login");
    }
    const user = results[0];
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      req.flash("error", "Invalid username or password");
      return res.redirect("/auth/login");
    }

    req.session.user = { id: user.id, username: user.username };
    res.redirect("/home");
  });
});

module.exports = router;
