CREATE DATABASE mindfulproject;
CREATE TABLE mindfull(
    user_id SERIAL PRIMARY KEY,
    article_title VARCHAR(40),
    article_description VARCHAR(254) ,
    song_name VARCHAR(30)
);
