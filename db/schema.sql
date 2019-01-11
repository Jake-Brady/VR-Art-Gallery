drop table if exists Gallery_Presets;
drop table if exists images;
drop table if exists users;

-- Create Table users
-- first name <varchar 60>, last name <varchar 60>, email address <varchar 120>, username <varchar 60 unique not null>, password <varchar 60 not null>, avatar image??? <TEXT>
create table users(
    id serial primary key,
    username varchar (60) unique not null,
    password varchar (60) not null,
    -- image text, (user avatar - might be useful if we this becomes multi-networked and need images to display in 3d Environment.)
    email varchar (250),
    first_name varchar(60),
    last_name varchar(60),
    is_online boolean
);

-- Create Table images
-- image1 through image15 <TEXT>
create table images(
    id serial primary key,
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
    image11 text,
    image12 text,
    image13 text,
    image14 text,
    image15 text,
    user_id integer references users(id)
);
-- ^user_id is a foreign key referencing the primary key of users table for joins.

-- Create Table Gallery_Presets
--Wall-Texture <TEXT>, Floor-Texture <TEXT>, Atmosphere-Lighting <TEXT>, User_id (foreign key to SPK of user)
create table Gallery_Presets(
    name_of_gallery varchar(20),
    thumbnail text,
    wall_texture text,
    floor_texture text,
    atmosphere_lighting text,
    music text,
    user_id integer references users(id)
);

