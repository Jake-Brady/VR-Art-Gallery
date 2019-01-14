drop table if exists gallery_presets;
drop table if exists images;
drop table if exists gallery_favorites;
drop table if exists gallery_popularity;
drop table if exists galleries;
drop table if exists users;

-- Create Table users
-- first name <varchar 60>, last name <varchar 60>, email address <varchar 120>, username <varchar 60 unique not null>, password <varchar 60 not null>, avatar image??? <TEXT>
create table users(
    id serial primary key,
    username varchar (60) unique not null,
    password varchar (60) not null,
    email varchar (250),
    first_name varchar(60),
    last_name varchar(60)
);

-- Create Table Galleries
create table galleries(
    id serial primary key,
    gallery_name varchar(20) not null,
    thumbnail text,
    is_private boolean,
    author text references users(username),
    user_id integer references users(id)
);

create table gallery_popularity(
    primary key (gallery_id),
    views integer,
    likes integer,
    times_favorited integer,
    gallery_id integer references galleries(id)
);

create table gallery_favorites(
    primary key (user_id, favorited),
    user_id integer references users(id),
    favorited integer references galleries(id)
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
    gallery_id integer references galleries(id)
);

-- Create Table Gallery_Presets
--Wall-Texture <TEXT>, Floor-Texture <TEXT>, Atmosphere-Lighting <TEXT>, User_id (foreign key to SPK of user)
create table gallery_presets(
    id serial primary key,
    wall_texture text,
    floor_texture text,
    atmosphere_lighting text,
    music text,
    gallery_id integer references galleries(id)
);

