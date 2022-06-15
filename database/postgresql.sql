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
    ('Wordle', 'I''ve created the Wordle in C++', 'https://github.com/koala1707/Wordle_C', 'https://i.pcmag.com/imagery/articles/01O9cD990ECgKwgagoHBoTW-2..v1642710512.png','C++'),
    ('Stock List', 'I''ve created item stocks list in ASP.NET', 'https://github.com/koala1707/ReviewWT', 'https://i0.wp.com/www.gktoday.in/wp-content/uploads/2016/04/Product-in-Marketing.png?w=1140&ssl=1' ,'ASP.NET'),
    ('Q and A', 'I''ve created a simple Q & A system in Python. When you ask a random question, the system answers you.', 'https://github.com/koala1707/Python_SDI', 'https://t4.ftcdn.net/jpg/01/01/55/49/360_F_101554982_0ADYzAGn9yOAQ7QyKJZu8ctKOfKcvhNl.jpg' ,'Python'),
    ('Patient survey', 'Coming soon. This is a university projects for young patients. I''ll rebuild the system as the original has privacy issue.', null, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGvl5CF6Zsg6cqM-e8FHua2IDryoQ1JxTnbg&usqp=CAU', 'React')
    ;


DROP table if exists ability_list;
CREATE TABLE ability_list (
	skills_id SERIAL primary key,
	percentage int NOT NULL,
	skill varchar(255) NOT NULL,
	bgColor varchar(255) NOT NULL,
    level varchar(255) NOT NULL
);

INSERT INTO ability_list (percentage, skill, bgColor, level)
VALUES
(40, 'ASP.NET', 'rgb(129, 26, 197)', 'Experience'),
(35, 'C++', 'rgb(150, 199, 87)', 'Experience'),
(65, 'CSS', 'rgb(24, 158, 91)', 'Advanced'),
(50, 'Java', 'rgb(26, 95, 185)', 'Intermediate'),
(70, 'JavaScript', 'rgb(24, 158, 91)', 'Advanced'),
(55, 'Python', 'rgb(196, 183, 2)', 'Advanced'),
(60, 'React.js', 'rgb(24, 158, 91)', 'Advanced'),
(55, 'Node.js', 'rgb(24, 158, 91)', 'Intermediate'),
(45, 'AWS', 'rgb(196, 134, 0)', 'Intermediate'),
(35, 'Docker', 'rgb(196, 134, 0)', 'Experience'),
(55, 'MySQL', 'rgb(196, 134, 0)', 'Intermediate'),
(55, 'SQL Server', 'rgb(196, 134, 0)', 'Intermediate');