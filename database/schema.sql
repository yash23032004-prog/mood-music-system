-- database/schema.sql
DROP DATABASE IF EXISTS mood_music;
CREATE DATABASE mood_music;
USE mood_music;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE songs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  mood VARCHAR(50) NOT NULL,
  song_name VARCHAR(255) NOT NULL,
  url VARCHAR(1000) NOT NULL
);

INSERT INTO songs (mood, song_name, url) VALUES
('happy', 'Happy — Pharrell Williams', 'https://www.youtube.com/watch?v=ZbZSe6N_BXs'),
('happy', 'On Top of the World — Imagine Dragons', 'https://www.youtube.com/watch?v=w5tWYmIOWGk'),
('sad', 'Someone Like You — Adele', 'https://www.youtube.com/watch?v=hLQl3WQQoQ0'),
('sad', 'Let Her Go — Passenger', 'https://www.youtube.com/watch?v=RBumgq5yVrA'),
('calm', 'Weightless — Marconi Union', 'https://www.youtube.com/watch?v=UfcAVejslrU'),
('energetic', 'Believer — Imagine Dragons', 'https://www.youtube.com/watch?v=7wtfhZwyrcc'),
('romantic', 'Perfect — Ed Sheeran', 'https://www.youtube.com/watch?v=2Vv-BfVoq4g');
