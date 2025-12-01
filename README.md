# Mood-Based Music Recommendation System

A web application that recommends songs based on user mood using Node.js, Express, MySQL and EJS.

## Features
- User registration & login with bcrypt password hashing
- Mood selection and song suggestions (YouTube links)
- MySQL database for users & songs
- Simple responsive UI (Bootstrap + custom CSS)

## Tech Stack
Node.js, Express.js, MySQL, bcrypt, EJS, Bootstrap 5

## Project Structure
mood-music-system/
┣ backend/ (server, routes, db)
┣ frontend/ (views - ejs)
┣ public/ (css, client assets)
┗ database/ (schema.sql)

## How to run (local)
1. Install Node.js and MySQL.
2. Import `database/schema.sql` into MySQL (use MySQL Workbench or command-line).
3. Open terminal:
   cd mood-music-system/backend
   npm install
   node app.js
4. Open browser: `http://localhost:3000`
5. Register a user → login → select mood → view songs.

## Note
- Edit `backend/db.js` to set your MySQL password if needed.
