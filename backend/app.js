// backend/app.js
const express = require("express");
const session = require("express-session");
const flash = require("connect-flash");
const path = require("path");

const app = express();
const authRoutes = require("./routes/auth");
const moodRoutes = require("./routes/mood");
const indexRoutes = require("./routes/index");

// view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../frontend")); // frontend holds ejs views

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

app.use(
  session({
    secret: "mood_secret_key_123",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(flash());

// expose session & flash to views
app.use((req, res, next) => {
  res.locals.user = req.session.user || null;
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  next();
});

// routes
app.use("/", indexRoutes);
app.use("/auth", authRoutes);
app.use("/mood", moodRoutes);

// start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
