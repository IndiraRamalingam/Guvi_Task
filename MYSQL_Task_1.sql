-- Design a DB for IMDB
-- =================================================================================
create database IMDB;
show databases;
use imdb;
show tables;
-- Empty set (0.21 sec)

-- =================================================================================
-- 1. Movie should have multiple media(Video or Image)
-- =================================================================================
 create table Movie(
     M_ID int NOT NULL primary key,
     Movie_name varchar(30) NOT NULL
    );
describe movie;
		-- +------------+-------------+------+-----+---------+-------+
		-- | Field      | Type        | Null | Key | Default | Extra |
		-- +------------+-------------+------+-----+---------+-------+
		-- | M_ID       | int         | NO   | PRI | NULL    |       |
		-- | Movie_name | varchar(30) | NO   |     | NULL    |       |
		-- +------------+-------------+------+-----+---------+-------+
create table media_type(
     MT_ID int NOT NULL Primary key,
     Movie_Type varchar(50) NOT NULL,
     M_ID int NOT NULL,
     foreign key(M_ID) references movie(M_ID)
	 );

desc media_type;
		-- +------------+-------------+------+-----+---------+-------+
		-- | Field      | Type        | Null | Key | Default | Extra |
		-- +------------+-------------+------+-----+---------+-------+
		-- | MT_ID      | int         | NO   | PRI | NULL    |       |
		-- | media_type | varchar(50) | NO   |     | NULL    |       |
		-- | M_ID       | int         | NO   | MUL | NULL    |       |
		-- +------------+-------------+------+-----+---------+-------+

-- Inserting records into movie table
insert into movie(M_ID,Movie_name) values(1,'Mersal');
insert into movie(M_ID,Movie_name) values(2,'Doctor');
insert into movie(M_ID,Movie_name) values(3,'Jai Bhim');
insert into movie(M_ID,Movie_name) values(4,'Good Night');
insert into movie(M_ID,Movie_name) values(5,'Thunivu');

 select * from movie;
			-- +------+------------+
			-- | M_ID | Movie_name |
			-- +------+------------+
			-- |    1 | Mersal     |
			-- |    2 | Doctor     |
			-- |    3 | Jai Bhim   |
			-- |    4 | Good Night |
			-- |    5 | Thunivu    |
			-- +------+------------+
            
-- Inserting records into media_type table
insert into media_type(MT_ID,media_type,M_ID) values(1,'https://mersal/img1.jpg',1);
insert into media_type(MT_ID,media_type,M_ID) values(2,'https://mersal/img2.jpg',1);
insert into media_type(MT_ID,media_type,M_ID) values(3,'https://mersal/video.mp4',1);
insert into media_type(MT_ID,media_type,M_ID) values(4,'https://doctor/img1.jpg',2);
insert into media_type(MT_ID,media_type,M_ID) values(5,'https://doctor/img2.jpg',2);
insert into media_type(MT_ID,media_type,M_ID) values(6,'https://jaibhim/img1.mp4',3);
insert into media_type(MT_ID,media_type,M_ID) values(7,'https://goodnight/img1.jpg',4);
insert into media_type(MT_ID,media_type,M_ID) values(8,'https://goodnight/mp4.jpg',4);
insert into media_type(MT_ID,media_type,M_ID) values(9,'https://thunivu/video.mp4',5);
insert into media_type(MT_ID,media_type,M_ID) values(10,'https://jaibhim/.mp4',3);

select * from media_type;

select * from media_type;
			-- +-------+----------------------------+------+
			-- | MT_ID | media_type                 | M_ID |
			-- +-------+----------------------------+------+
			-- |     1 | https://mersal/img1.jpg    |    1 |
			-- |     2 | https://mersal/img2.jpg    |    1 |
			-- |     3 | https://mersal/video.mp4   |    1 |
			-- |     4 | https://doctor/img1.jpg    |    2 |
			-- |     5 | https://doctor/img2.jpg    |    2 |
			-- |     6 | https://jaibhim/img1.mp4   |    3 |
			-- |     7 | https://goodnight/img1.jpg |    4 |
			-- |     8 | https://goodnight/mp4.jpg  |    4 |
			-- |     9 | https://thunivu/video.mp4  |    5 |
			-- |    10 | https://jaibhim/.mp4       |    3 |
			-- +-------+----------------------------+------+


-- =================================================================================
-- 2. Movie can belongs to multiple Genre
-- =================================================================================

create table Genre(
     G_ID int NOT NULL,
     Genre varchar(50) NOT NULL primary key
	 );

insert into Genre(G_ID,Genre) values(1,'Action');
insert into Genre(G_ID,Genre) values(2,'Adventure');
insert into Genre(G_ID,Genre) values(3,'Comedy');
insert into Genre(G_ID,Genre) values(4,'Crime');
insert into Genre(G_ID,Genre) values(5,'Thriller');
insert into Genre(G_ID,Genre) values(6,'Drama');
insert into Genre(G_ID,Genre) values(7,'Romance');

select * from Genre;

		-- +------+-----------+
		-- | G_ID | Genre     |
		-- +------+-----------+
		-- |    1 | Action    |
		-- |    2 | Adventure |
		-- |    3 | Comedy    |
		-- |    4 | Crime     |
		-- |    6 | Drama     |
		-- |    7 | Romance   |
		-- |    5 | Thriller  |
		-- +------+-----------+

create table genre_type(
     GT_ID int NOT NULL Primary key,
     Genre varchar(50) NOT NULL,
     M_ID int NOT NULL,
     foreign key(Genre) references Genre(Genre),
     foreign key(M_ID) references movie(M_ID)
	 );
     
insert into genre_type(GT_ID,Genre,M_ID)values(1,'Action',1);
insert into genre_type(GT_ID,Genre,M_ID)values(2,'Action',2);
insert into genre_type(GT_ID,Genre,M_ID)values(3,'Crime',3);
insert into genre_type(GT_ID,Genre,M_ID)values(4,'Romance',4);
insert into genre_type(GT_ID,Genre,M_ID)values(5,'Action',5);
insert into genre_type(GT_ID,Genre,M_ID)values(6,'Drama',1);
insert into genre_type(GT_ID,Genre,M_ID)values(7,'Comedy',2);
insert into genre_type(GT_ID,Genre,M_ID)values(8,'Thriller',5);
insert into genre_type(GT_ID,Genre,M_ID)values(9,'Drama',4);
insert into genre_type(GT_ID,Genre,M_ID)values(10,'Drama',3);

select * from genre_type;

			-- +-------+----------+------+
			-- | GT_ID | Genre    | M_ID |
			-- +-------+----------+------+
			-- |     1 | Action   |    1 |
			-- |     2 | Action   |    2 |
			-- |     3 | Crime    |    3 |
			-- |     4 | Romance  |    4 |
			-- |     5 | Action   |    5 |
			-- |     6 | Drama    |    1 |
			-- |     7 | Comedy   |    2 |
			-- |     8 | Thriller |    5 |
			-- |     9 | Drama    |    4 |
			-- |    10 | Drama    |    3 |
			-- +-------+----------+------+
-- =================================================================================
-- 3. Movie can have multiple reviews and Review can belongs to a user
-- =================================================================================
	
create table Review(
     R_ID int NOT NULL,
     Review varchar(50) NOT NULL primary key
	 );

insert into Review(R_ID,Review) values(1,'Good');
insert into Review(R_ID,Review) values(2,'Excellent');
insert into Review(R_ID,Review) values(3,'Amazing');
insert into Review(R_ID,Review) values(4,'Not Bad');
insert into Review(R_ID,Review) values(5,'Satisfied');

select * from Review;

		-- +------+-----------+
		-- | R_ID | Review    |
		-- +------+-----------+
		-- |    3 | Amazing   |
		-- |    2 | Excellent |
		-- |    1 | Good      |
		-- |    4 | Not Bad   |
		-- |    5 | Satisfied |
		-- +------+-----------+

create table User(
     U_ID int NOT NULL,
     User_name varchar(50) NOT NULL primary key
	 );

insert into User(U_ID,User_name) values(1,'User1');
insert into User(U_ID,User_name) values(2,'User2');
insert into User(U_ID,User_name) values(3,'User3');
insert into User(U_ID,User_name) values(4,'User4');
insert into User(U_ID,User_name) values(5,'User5');

select * from User;

			-- +------+-----------+
			-- | U_ID | User_name |
			-- +------+-----------+
			-- |    1 | User1     |
			-- |    2 | User2     |
			-- |    3 | User3     |
			-- |    4 | User4     |
			-- |    5 | User5     |
			-- +------+-----------+

create table user_review(
     UR_ID int NOT NULL Primary key,
     M_ID int NOT NULL,
     Review varchar(50) NOT NULL,
     User_name varchar(30) NOT NULL,
     foreign key(M_ID) references movie(M_ID),
     foreign key(Review) references Review(Review),
     foreign key(User_name) references User(User_name)
	 );

insert into user_review(UR_ID,M_ID,Review,User_name) values(1,1,'Good','User5');
insert into user_review(UR_ID,M_ID,Review,User_name) values(2,3,'Amazing','User4');
insert into user_review(UR_ID,M_ID,Review,User_name) values(3,2,'Excellent','User3');
insert into user_review(UR_ID,M_ID,Review,User_name) values(4,5,'Amazing','User1');
insert into user_review(UR_ID,M_ID,Review,User_name) values(5,4,'Excellent','User4');
insert into user_review(UR_ID,M_ID,Review,User_name) values(6,5,'Good','User3');
insert into user_review(UR_ID,M_ID,Review,User_name) values(7,2,'Excellent','User1');
insert into user_review(UR_ID,M_ID,Review,User_name) values(8,1,'Amazing','User2');

select * from user_review;

-- 		+-------+------+-----------+-----------+
-- 		| UR_ID | M_ID | Review    | User_name |
-- 		+-------+------+-----------+-----------+
-- 		|     1 |    1 | Good      | User5     |
-- 		|     2 |    3 | Amazing   | User4     |
-- 		|     3 |    2 | Excellent | User3     |
-- 		|     4 |    5 | Amazing   | User1     |
-- 		|     5 |    4 | Excellent | User4     |
-- 		|     6 |    5 | Good      | User3     |
-- 		|     7 |    2 | Excellent | User1     |
-- 		|     8 |    1 | Amazing   | User2     |
-- 		+-------+------+-----------+-----------+

-- =================================================================================
-- 4. Artist can have multiple skills
-- =================================================================================

create table Artist(
     A_ID int NOT NULL,
     Artist_name varchar(30) NOT NULL primary key
    );
    
describe Artist;

-- 		+-------------+-------------+------+-----+---------+-------+
-- 		| Field       | Type        | Null | Key | Default | Extra |
-- 		+-------------+-------------+------+-----+---------+-------+
-- 		| A_ID        | int         | NO   |     | NULL    |       |
-- 		| Artist_name | varchar(30) | NO   | PRI | NULL    |       |
-- 		+-------------+-------------+------+-----+---------+-------+

insert into Artist(A_ID,Artist_name) values(1,'Vijay');
insert into Artist(A_ID,Artist_name) values(2,'Surya');
insert into Artist(A_ID,Artist_name) values(3,'Vikram');
insert into Artist(A_ID,Artist_name) values(4,'Ajith');
insert into Artist(A_ID,Artist_name) values(5,'Rajini');

select * from Artist;

-- 			+------+-------------+
-- 			| A_ID | Artist_name |
-- 			+------+-------------+
-- 			|    4 | Ajith       |
-- 			|    5 | Rajini      |
-- 			|    2 | Surya       |
-- 			|    1 | Vijay       |
-- 			|    3 | Vikram      |
-- 			+------+-------------+
 
 create table Skills(
     S_ID int NOT NULL,
     Skills varchar(30) NOT NULL primary key
    );

insert into Skills(S_ID,Skills) values(1,'Acting');
insert into Skills(S_ID,Skills) values(2,'Dance');
insert into Skills(S_ID,Skills) values(3,'Comedy');
insert into Skills(S_ID,Skills) values(4,'Lyrics');
insert into Skills(S_ID,Skills) values(5,'Singer');
insert into Skills(S_ID,Skills) values(6,'Producer');

select * from Skills;

-- 			+------+----------+
-- 			| S_ID | Skills   |
-- 			+------+----------+
-- 			|    1 | Acting   |
-- 			|    3 | Comedy   |
-- 			|    2 | Dance    |
-- 			|    4 | Lyrics   |
-- 			|    6 | Producer |
-- 			|    5 | Singer   |
-- 			+------+----------+

create table multiple_skills(
     MS_ID int NOT NULL Primary key,
     Artist_name varchar(50) NOT NULL,
     Skills varchar(30) NOT NULL,
     foreign key(Artist_name) references Artist(Artist_name),
     foreign key(Skills) references Skills(Skills)
	 );

insert into multiple_skills(MS_ID,Artist_name,Skills) values(1,'Vijay','Acting');
insert into multiple_skills(MS_ID,Artist_name,Skills) values(2,'Vijay','Dance');
insert into multiple_skills(MS_ID,Artist_name,Skills) values(3,'Vijay','Singer');
insert into multiple_skills(MS_ID,Artist_name,Skills) values(4,'Surya','Acting');
insert into multiple_skills(MS_ID,Artist_name,Skills) values(5,'Surya','Producer');
insert into multiple_skills(MS_ID,Artist_name,Skills) values(6,'Vikram','Acting');
insert into multiple_skills(MS_ID,Artist_name,Skills) values(7,'Vikram','Dance');
insert into multiple_skills(MS_ID,Artist_name,Skills) values(8,'Ajith','Acting');
insert into multiple_skills(MS_ID,Artist_name,Skills) values(9,'Ajith','Producer');
insert into multiple_skills(MS_ID,Artist_name,Skills) values(10,'Rajini','Acting');

select * from multiple_skills;

-- 			+-------+-------------+----------+
-- 			| MS_ID | Artist_name | Skills   |
-- 			+-------+-------------+----------+
-- 			|     1 | Vijay       | Acting   |
-- 			|     2 | Vijay       | Dance    |
-- 			|     3 | Vijay       | Singer   |
-- 			|     4 | Surya       | Acting   |
-- 			|     5 | Surya       | Producer |
-- 			|     6 | Vikram      | Acting   |
-- 			|     7 | Vikram      | Dance    |
-- 			|     8 | Ajith       | Acting   |
-- 			|     9 | Ajith       | Producer |
-- 			|    10 | Rajini      | Acting   |
-- 			+-------+-------------+----------+

-- =================================================================================
-- 5. Artist can perform multiple role in a single film
-- =================================================================================

create table Roles(
     R_ID int NOT NULL,
     Roles varchar(30) NOT NULL primary key
    );

insert into Roles(R_ID,Roles) values(1,'Thief');
insert into Roles(R_ID,Roles) values(2,'Buddhist');
insert into Roles(R_ID,Roles) values(3,'Villain');
insert into Roles(R_ID,Roles) values(4,'Hero');

select * from Roles;

-- 			+------+----------+
-- 			| R_ID | Roles    |
-- 			+------+----------+
-- 			|    2 | Buddhist |
-- 			|    4 | Hero     |
-- 			|    1 | Thief    |
-- 			|    3 | Villain  |
-- 			+------+----------+

create table Film(
     F_ID int NOT NULL,
     Film varchar(30) NOT NULL primary key
    );

insert into Film(F_ID,Film)values(1,'Kaththi');
insert into Film(F_ID,Film)values(2,'7am arivu');
insert into Film(F_ID,Film)values(3,'Vaali');

select * from Film;

-- 		+------+-----------+
-- 		| F_ID | Film      |
-- 		+------+-----------+
-- 		|    2 | 7am arivu |
-- 		|    1 | Kaththi   |
-- 		|    3 | Vaali     |
-- 		+------+-----------+

create table multiple_roles(
     MR_ID int NOT NULL Primary key,
     Artist_name varchar(50) NOT NULL,
     Roles varchar(30) NOT NULL,
     Film varchar(30) NOT NULL,
     foreign key(Artist_name) references Artist(Artist_name),
     foreign key(Roles) references Roles(Roles),
     foreign key(Film) references Film(Film)
	 );

insert into multiple_roles(MR_ID,Artist_name,Roles,Film) values(1,'Vijay','Hero','Kaththi');
insert into multiple_roles(MR_ID,Artist_name,Roles,Film) values(2,'Vijay','Thief','Kaththi');
insert into multiple_roles(MR_ID,Artist_name,Roles,Film) values(3,'Surya','Buddhist','7am Arivu');
insert into multiple_roles(MR_ID,Artist_name,Roles,Film) values(4,'Surya','Hero','7am Arivu');
insert into multiple_roles(MR_ID,Artist_name,Roles,Film) values(5,'Ajith','Villain','Vaali');
insert into multiple_roles(MR_ID,Artist_name,Roles,Film) values(6,'Ajith','Hero','Vaali');

select * from multiple_roles;

-- 		+-------+-------------+----------+-----------+
-- 		| MR_ID | Artist_name | Roles    | Film      |
-- 		+-------+-------------+----------+-----------+
-- 		|     1 | Vijay       | Hero     | Kaththi   |
-- 		|     2 | Vijay       | Thief    | Kaththi   |
-- 		|     3 | Surya       | Buddhist | 7am Arivu |
-- 		|     4 | Surya       | Hero     | 7am Arivu |
-- 		|     5 | Ajith       | Villain  | Vaali     |
-- 		|     6 | Ajith       | Hero     | Vaali     |
-- 		+-------+-------------+----------+-----------+






