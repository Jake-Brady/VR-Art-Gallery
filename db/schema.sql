-- drop table if exists '_____'
-- drop table if exists '_____'
-- drop table if exists '_____'

-- Create Table users
-- first name <varchar 60>, last name <varchar 60>, email address <varchar 120>, username <varchar 60 unique not null>, password <varchar 60 not null>, avatar image??? <TEXT>
create table users(
    id serial primary key,
    username varchar (60) unique not null,
    password varchar (60) not null,
    -- image text, 
    email varchar (250),
    first_name varchar(60),
    last_name varchar(60),
    is_online boolean
);

-- Create Table images
-- image1 through image10 <TEXT>
create table images
id serial primary key
image1 text,
image2 text,
image3 text,
image4 text,
image5 text,
image6 text,
image7 text,
image8 text,
image9 text,
image10 text,
user_id integer references user(id)
-- ^user_id is a foreign key referencing the primary key of users table for joins.


-- Create Table relationships
-- is_friend <true/false>, friend_pending <true/false>, is_blocked <true/false>,

-- Create Table Gallery_Presets
--Wall-Texture <TEXT>, Floor-Texture <TEXT>, Atmosphere-Lighting <TEXT>, 
