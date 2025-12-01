// backend/routes/index.js
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  if (!req.session.user) return res.redirect("/auth/login");
  res.redirect("/home");
});

router.get("/home", (req, res) => {
  if (!req.session.user) return res.redirect("/auth/login");
  res.render("home", { user: req.session.user });
});

router.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.redirect("/auth/login");
  });
});

module.exports = router;

