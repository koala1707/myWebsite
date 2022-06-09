DROP table if exists images;
CREATE TABLE images (image_id int primary key auto_increment, category varchar(255) NOT NULL, photoName varchar(255) NOT NULL);

-- add a column in table
ALTER TABLE images ADD image varchar(255);

DROP table if exists messages;
CREATE TABLE messages (
    messages_id int primary key auto_increment,
    company varchar(255) NOT NULL,
    firstName varchar (255) NOT NULL,
    lastName varchar (255) NOT NULL,
    emalAddress varchar (255) NOT NULL,
    phoneNumber int NOT NULL
);

ALTER TABLE messages ADD comment varchar(255);

DROP table if exists github;
CREATE TABLE github (
	github_id int primary key auto_increment,
	title varchar(255) unique key NOT NULL,
	description varchar(255) NOT NULL,
	github_link varchar(255) NOT NULL,
    image varchar(255) NOT NULL,
    language varchar(255) NOT NULL,
);