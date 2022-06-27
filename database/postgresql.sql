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
(55, 'Python', 'rgb(196, 183, 2)', 'Intermediate'),
(60, 'React.js', 'rgb(24, 158, 91)', 'Advanced'),
(55, 'Node.js', 'rgb(24, 158, 91)', 'Intermediate'),
(45, 'AWS', 'rgb(196, 134, 0)', 'Intermediate'),
(35, 'Docker', 'rgb(196, 134, 0)', 'Experience'),
(55, 'MySQL', 'rgb(196, 134, 0)', 'Intermediate'),
(55, 'SQL Server', 'rgb(196, 134, 0)', 'Intermediate');



DROP table if exists details;
CREATE TABLE details (
	details_id SERIAL primary key,
	title varchar(255) NOT NULL,
	description varchar(255) NOT NULL,
    category varchar(255) NOT NULL
);
INSERT INTO details (title, description,category)
VALUES
('• Monitoring working hours for engineers in GAS','Created programming to manage programmers’ working hours in google spreadsheet using Google Apps Scripts (GAS)','AI travel'),
('• Monitoring AWS cost with Slack and Google spreadsheet','Created programming to send AWS services cost to Slack and google spreadsheet. Allowing managers to monitor cost movement every six hours with AWS Lambda in Python. (GAS in JavaScript)','AI travel'),
('• Displaying the latest flight information with API','Created programming to extract data from database in Ruby with MySQL', 'AI travel'),
('• Involved in installing a new financial system for the entire company','uccussed to introduce and install new system to all subsidiaries', 'NTN corporation'),
('• Tax documents','Declared of consumption tax document', 'NTN corporation'),
('Tresurer','I''m responsible for managing finance for Univerisity of South Australia Ultimate Club since 2020.','volunteers'),
('Ambassador','I am responsible for managing the finance of Univerisity of South Australia Ultimate Club since 2020. I have knowledge to manage expend','volunteers'),
('Multi cultures', 'I have met many people at Univeristy and talked thier background and thoughts. It was interested in knowing new ideas I have never thought on that way. ', 'Interest'),
('Hiking & Running', 'I have done hiking and running since I was a kid. It makes me refreshed and I can do whenever I want.', 'Interest'),
('Ultimate frisbee', 'I have started playing ultimate frisbee since I came to Australia. I wanted to begin a sport I have not played before. I have met many people through the sport and improve my communication skill.', 'Interest'),
('Traveling', 'I love travelling around the world. I have been to USA, Phillipines, Malaysia, Thailand, Taiwan, New zealand, South Korea so far. I would like to travel more in the future.', 'Interest')
;

