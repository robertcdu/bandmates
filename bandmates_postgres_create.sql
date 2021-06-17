--Create user table
CREATE TABLE users (
  _id SERIAL PRIMARY KEY,
  name VARCHAR ( 50 ) NOT NULL,
  username VARCHAR ( 50 ) UNIQUE NOT NULL,
  email VARCHAR ( 255 ) UNIQUE NOT NULL,
  password_digest VARCHAR ( 50 ) NOT NULL,
  gender VARCHAR ( 50 ),
  birthdate DATE,
  location VARCHAR ( 50 ),
  skill_level VARCHAR ( 50 ),
  bio VARCHAR ( 255 )
);

-- Create instruments table
CREATE TABLE instruments (
	_id SERIAL PRIMARY KEY,
  instrument_name VARCHAR ( 50 )
);
​
-- Create genre table
CREATE TABLE genre (
	_id SERIAL PRIMARY KEY,
  genre_name VARCHAR ( 50 )
);

-- Create junction table (for many-to-many relationship between users and instruments)
CREATE TABLE users_instruments (
  "_id" SERIAL NOT NULL,
  "user_id" BIGINT NOT NULL,
  "instrument_id" BIGINT NOT NULL,
  CONSTRAINT "users_instruments_pk" PRIMARY KEY ("_id")
);

-- Create junction table (for many-to-many relationship between users and genres)
CREATE TABLE users_genres (
  "_id" SERIAL NOT NULL,
  "user_id" BIGINT NOT NULL,
  "genre_id" BIGINT NOT NULL,
  CONSTRAINT "users_genres_pk" PRIMARY KEY ("_id")
);
​
-- Set "user_id" and "instrument_id" on "users_instruments" (junction table) as foreign keys pointing to "_id" on both "users" and "instruments" tables
ALTER TABLE users_instruments ADD CONSTRAINT "users_instruments_fk0" FOREIGN KEY (user_id) REFERENCES users("_id");
ALTER TABLE users_instruments ADD CONSTRAINT "users_instruments_fk1" FOREIGN KEY (instrument_id) REFERENCES instruments("_id");

​-- Set "user_id" and "genre_id" on "users_genres" (junction table) as foreign keys pointing to "_id" on both "users" and "genre" tables
ALTER TABLE users_genres ADD CONSTRAINT "users_genres_fk0" FOREIGN KEY (user_id) REFERENCES users("_id");
ALTER TABLE users_genres ADD CONSTRAINT "users_genres_fk1" FOREIGN KEY (genre_id) REFERENCES genre("_id");

-- Populate intruments tablem (new rows)
INSERT INTO instruments(instrument_name) VALUES ('Vocals'), ('Guitar'), ('Bass'), ('Drums'), ('Piano'), ('Keyboard / Synth'), ('Drum Machine'), ('Brass Instrument'), ('String Instrument'), ('Percussion');

-- Populate genre table (new rows)
INSERT INTO genre(genre_name) 
VALUES('Rock'), ('Punk'), ('Bass'), ('Metal'), ('Hip-Hop'), ('Country'), ('Soul'), ('Electronic'), ('Pop'), ('RnB / Neo-Soul'), ('Folk');

-- Populate users table (new rows)
INSERT INTO users(name, username, password_digest, email, gender, birthdate, skill_level, bio) VALUES ('Ian Badman','IanG', 'password', 'ian@ian.com', 'Man', '1996-02-05', 'amateur', 'Looking for more friends to make music with!'), ('Jesse Jones', 'Jesse123', 'ilovemusic', 'jesse@aol.com', 'non-binary', '1999-10-30', 'amateur', 'I’m looking to form a band to play gigs in the general NYC area'), ('Nicky Melancholy', 'Nickynick', 'livetodie420', 'nick@yahoo.com', 'Man', '1992-12-31', 'amateur', 'Hey y’all, I’m looking to improve my music production skills'),('Karen Bobcut', 'KarenSings', 'mynameiskaren', 'karen@karen.com', 'Woman', '1980-06-20', 'professional', 'I want to play wedding gigs!');
​

-- Populate "users_instruments" and "users_genres" tables
INSERT INTO users_instruments(user_id,instrument_id) VALUES (1, 1),(2, 2),(3, 5),(4, 1);
INSERT INTO users_genres(user_id,genre_id) VALUES (4, 1),(1, 9),(2, 1),(3, 8);


​