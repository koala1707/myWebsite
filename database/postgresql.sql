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
('• Monitoring working hours for engineers in GAS','Created a program to manage working hours in google spreadsheet using Google Apps Scripts (GAS)','AI travel'),
('• Monitoring AWS cost with Slack and Google spreadsheet','Created a program to send AWS service costs to Slack and google spreadsheet. This allows managers to monitor cost movement every six hours with AWS Lambda in Python. (GAS in JavaScript)','AI travel'),
('• Displaying the latest flight information with API','Created a program to extract data from databases in Ruby with MySQL', 'AI travel'),
('• Involved in installing a new financial system for the entire company','Succeeded in introducing and installing a new system with all subsidiaries', 'NTN corporation'),
('• Tax documents','Declared consumption taxes for multiple branches', 'NTN corporation'),
('Tresurer','I''ve been responsible for managing the finance of University of South Australia Ultimate Club since 2020. I''ve gained knowledge of managing expenditure and revenue.','volunteering'),
('Ambassador','I''m preparing to join this project in 2022 as my professor recommended me. I''ll provide a testimonial of my experiences throughout university.','volunteering'),
('International cultures', 'I have met many people from different countries at University and discussed their background and thoughts. I enjoy exploring new ideas brought through different life experiences.', 'Interest'),
('Hiking & Running', 'I have been hiking and running since I was a kid. It refreshes me  and it''s easy for me to find time for.', 'Interest'),
('Ultimate frisbee', 'I started playing ultimate frisbee when I arrived in Australia. I wanted to try a sport I hadn''t played before. I have met many people through it and it''s improved my communication skills and teamwork.', 'Interest'),
('Traveling', 'I love travelling around the world. I have been to the US, Phillipines, Malaysia, Thailand, Taiwan, New Zealand and South Korea so far. I look forward to opportunities to travel in the future.', 'Interest')
;

