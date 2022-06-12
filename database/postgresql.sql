DROP table if exists github;
CREATE TABLE github (
	github_id SERIAL primary key,
	title varchar(255) unique NOT NULL,
	description varchar(255) NOT NULL,
	github_link varchar(255) NOT NULL,
    image varchar(255) NOT NULL,
    language varchar(255) NOT NULL
);

INSERT INTO github (title, description, github_link, image, language)
VALUES 
    ('Wordle', 'I''ve created the Wordle in C++', 'https://github.com/koala1707/Wordle_C', '/wordle.png','C++'),
    ('Stock List', 'I''ve created item stocks list in ASP.NET', 'https://github.com/koala1707/ReviewWT', '/product.png' ,'ASP.NET'),
    ('Q and A', 'I''ve created a simple Q & A system in Python. When you ask a random question, the system answers you.', 'https://github.com/koala1707/Python_SDI', '/qanda.png' ,'Python')
    ;