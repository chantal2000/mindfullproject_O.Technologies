CREATE DATABASE mindfuldb;
CREATE TABLE myarticles(
    user_id SERIAL PRIMARY KEY,
    article_title VARCHAR(30),
    article_description VARCHAR(253),
    song_name VARCHAR(20) 
);
