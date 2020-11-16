create database chirpr2;
use chirpr2;

create table users (
	id int not null auto_increment primary key,
    name varchar(100) not null,
    email varchar(100), 
    password varchar (40) null,
    _created datetime default current_timestamp
);

create table chirps (
	id int not null auto_increment primary key,
    userid int not null,
    content varchar(280) not null,
    location varchar(100),
    _created datetime default current_timestamp
);

create table mentions (
	userid int not null,
    chirpid int not null,
    primary key (userid, chirpid)
);

alter table mentions
add foreign key (userid) references users(id);

alter table mentions
add foreign key (chirpid) references chirps(id);


alter table chirps
add foreign key (userid) references users(id);

-- insert into users(name, email, password) values
-- ("Gene", "detroitfartcity@bb.com", "music"),
-- ("Louise", "secretbooboolover@bb.com", "kuchikopi"),
-- ("Tina", "equestronautsfanfic@bb.com", "tina"),
-- ("Bob", "bobsburgers@bb.com", "burgers"),
-- ("Linda", "secretmusicaldinnertheater@bb.com", "singing"),
-- ("Teddy", "iamarepairman@repairman.com", "hammer"),
-- ("Mort", "mortsmortuary@mortuary.com", "funerals"),
-- ("Rudy", "regularsizedrudy@wagstaff.edu", "inhaler"),
-- ("Jimmy Jr.", "dancemasterpesto@pesto.com", "dance"),
-- ("AndyOllie", "andyandolliebff@pesto.com", "twins");

-- insert into chirps(userid, content, location) values
-- (1, "A fart is like fingerprints and we have the same fingerprints!", "Spaghetti Western and Meatballs"),
-- (1, "I'm just a girl with a dream who got tired of hearing the word no.", "The Kids Run the Restaurant"),
-- (1, "I can't take all the credit! I'd like to thank this brick and Quest Love.", "The Belchies"),
-- (1, "As long as we're giving orders, put some clothes on! Leave something to teh imagination for God's sake!", "Beefsquatch"),
-- (1, "No one blackmails our sister but us!", "Bad Tina"),
-- (1, "We're Belchers from the womb to the tomb!", "Bad Tina"),
-- (1, "Was it obvious I don't care?", "Burgerboss"),
-- (1, "I was BORN to be a mother!", "Sliding Bobs"),
-- (1, "Next time we do this I'm getting an epidural", "Synchronized Swimming"),
-- (1, "Come on! If you're going to be loud, you've gotta be proud!", "Bad Tina");

-- insert into chirps(userid, content, location) values
-- (2, "Sorry, I'm saving my spit and blood for my honeymoon.", "Burger Wars"),
-- (2,"Turns out dad has been putting murder cows in our hamburgers", "Sacred Cow"),
-- (2,"I hope they were using protection because I am not taking care of that baby.", "Crawl Space"),
-- (2, "And I'm going to get my gun license, finally", "Sacred Cow"),
-- (2, "Why don't you start speaking in words instead of your DAMN DIRTY LIES!", "The unbearable LIke-Likeness of Gene"),
-- (2, "Your room looks like it was decorated by a perverted jockey.", "Spaghetti Wester and Meatballs"),
-- (2, "Hey, I don't appreciate your lack of sarcasm.", "Bob and Deliver"),
-- (2, "The treasure's in teh crack of the ass, I can smell it.", "The Belchies"),
-- (2, "Kissing is like a fight with lips", "Sheesh! Cab, Bob?"),
-- (2, "I smell fear on you.", "Beefsquatch");

-- insert into chirps(userid, content, location) values
-- (3, "I am a smart, srong, sensual woman.", "The Belchies"),
-- (3, "If we see any mermaids, I'm gonna ask them where their merginas are.", "Burgerboss"),
-- (3, "My heart just pooped its pants.", "Boyz 4 Now"),
-- (3, "Time for the charm bomb to explode.", "Tina Tailor Soldier Spy"),
-- (3, "Do you think horses get songs stuck in their heads?", "Bed & Breakfast"),
-- (3, "And if boys had uteruses, they'd be called duderuses.", "The Belchies"),
-- (3, "If you need me, I'll be here on the floor dying.", "Sheesh! Cab, Bob?"),
-- (3, "Is it possible to be in love with 25 people at once?", "Torpedo"),
-- (3, "Our toaster is also confused. It doesn't know why we put bagels in it.", "The Deepening"),
-- (3, "Your ass is grass and I'm gonna mow it!", "Family Fracas");

-- insert into chirps(userid, content, location) values
-- (4, "Are we just going to ignore the fact that Louise just pooped in the pool?", "Synchronized Swimming"),
-- (4, "Bribe Louise? We don't have that kind of money.", "The Belchies"),
-- (4, "It's not dinner, and it isn't theater either. It's like the imitation cheese of theater.", "Dinner Theater"),
-- (4, " Every year, I try and tell you guys that no one really sings Thanksgiving songs.", "Thanksgiving"),
-- (4, "You're my children and I love you, but you're all terrible at what you do here and I feel like I should tell you. I'd fire you all if I could.", "Human Flesh"),
-- (4, "Oh my god...", "Many episodes"),
-- (4, "Admit it, you look up to me!", "Carpe Museum"),
-- (4, "Hey, sometimes good things come from boredome. Like Gene.", "Carpe Museum"),
-- (4, "Well, Your Honor, I couldn't see the meter beacause there was a kid standing in front of it. And he was exactly... meter-sized.", "O.T.");

-- insert into chirps(userid, content, location) values
-- (5, "Alright", "Many episodes"),
-- (5, "I would rather be married to a suspected cannibal with a dream, like you, than a soft-lipped guy who never had a dream in the first place", "Human Flesh"),
-- (5, "Running down the gutter with a piece of bread and butter,.... diarrhea!", "Tinarannosaurus Wrecks"),
-- (5, "When I die I want you to cremate me and throw my ashes in Tom Selleck's Face.", "Burger Wars"),
-- (5, "No one sheds like this family, it's like a bunch of Chewbaccas.", "Crawl Space"),
-- (5, "Hit him in his handsome groin!", "Burger Wars"),
-- (5, "I dreamed that I was breast feeding Gene again, but he had a long, white beard, like Santa Claus. Oh, it was freaky!", "Synchronized Swimming"),
-- (5, "Well I may have slipped a penis pill in your casserole. Surprise!", "The Belchies"),
-- (5, "Mommy doesn't get drunk, she just has fun.", "Bad Tina"),
-- (5, "Don't tell me not to have a crap attack! I'll have a crap attack anytime I want!", "Bad Tina");

-- insert into chirps(userid, content, location) values
-- (6, "Don't feed a guy a sponge, Bobby!", "Wonder Wharf"),
-- (6,"Do not come in here! Nobody come in here! Someone threw up in the bounce house.", "Wedding"),
-- (6, "My temporary house, my temporary rules! You don't like it? There's the door that you can't go out of!", "Halloween"),
-- (6, "No, that was my second cousin, and it was third base.", "Burger Wars"),
-- (6, "I made this guy say yes with my body!", "Wonder Wharf"),
-- (6, "Bobby, want to come over and watch the game tonight? I'm making a three-bean salad, but it's bring your own bean. Can I put you down for garbonzo?", "Teddy Has a Party"),
-- (6, "Gretchen's sister is skinny, Lin, but it's because she's on meth amphetamines.", "Valentine's Day"),
-- (6, "We'll be doing many things this weekend like dinner, rough housing but not too rough, brushing teeth, and going to bed.", "Teddy Babysits"),
-- (6, "I can fix it!", "Many Episodes"),
-- (6, "Is my ass on fire? Be honest.", "Carpe Museum");

-- insert into chirps(userid, content, location)
-- values(7, "Customized caskets and urns, that's our specialty", "Human Flesh");

-- insert into chirps(userid, content, location) values
-- (8, "Fun hurts my lungs.", "Carpe Museum"),
-- (8, "I just hope my body is strong enough to fight off lice and asthma at the same time", "Carpe Museum"),
-- (8, "My asthma was misdiagnosed as having a bad attitude.", "Lice Things Are Lice"),
-- (8, "I'm allergic to geese and ducks.", "The Kids Rob a Train");

-- insert into chirps(userid, content, location) values
-- (9, "Don't tell me not to dance, Dad!", "The Kids Run The Restaurant"),
-- (9, "I can't only see you on the Zeke-ends. That's not enough Zeke for me.", "Wonder Wharf"),
-- (9, "Someday we're gonna start our own men's fashion line and then live in a van!", "Carpe Museum"),
-- (9, "My brothers are twins, but there's only one of me", "Valentine's day"),
-- (9, "If I die of boredome, tell my story.", "The Belchies"),
-- (9, "Abraca-Yeah, bro! I support ya!", "Halloween"),
-- (9, "I'm the Katniss to your Pita bread.", "Valentine's Day");

-- insert into chirps(userid, content, location) values
-- (10, "Ahhh! Bathroom clowns!", "Bad Tina"),
-- (10, "Cool! Mom packed tampons for lunch!", "Human Flesh"),
-- (10, "Let's rub our eyes together! You can get my pink eye!", "Wagstaff Times"),
-- (10, "I just peed Andy's pants", "The Belchies"),
-- (10, "Back to you Andy! Back to you Ollie!", "Wonder Wharf"),
-- (10, "Cut me open and crawl inside me!", "Art Crawl"),
-- (10, "Flush some chicken soup into him!", "Toilet Humor"), 
-- (10, "They call it ice, and it's gonna change the world!", "Ice Rink Basement"),
-- (10, "Let's die like we were born - two minutes apart!", "Synchronized Swimming"),
-- (10, "I got a fun-cussion!", "Fort");

-- insert into mentions (userid, chirpid) values
-- (4, 12), 
-- (2, 33),
-- (2, 34),
-- (1, 40),
-- (4, 43),
-- (1, 48),
-- (4, 49),
-- (4, 52),
-- (4, 57),
-- (10, 70),
-- (1, 37),
-- (2, 37),
-- (3, 37);

-- select chirps.content from chirps;
-- select u.name, u.email from users u;

-- select users.name, chirps.content from users
-- inner join chirps
-- on (users.id = chirps.userid)

-- --user number 4-- 
-- select users.* from mentions
-- join users
-- on (mentions.userid = users.id)
-- where users.id = 4;

-- create user
-- 	'chirprapp'@'localhost'
-- identified by 'password';

-- grant all privileges
-- on chirpr2.*
-- to 'chirprapp'@'localhost';

UPDATE users
SET name = ""
WHERE name = "";

select * from users;



