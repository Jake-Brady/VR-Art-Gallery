drop table if exists gallery_presets;
drop table if exists captions;
drop table if exists images;
drop table if exists gallery_favorites;
drop table if exists galleries;
drop table if exists users;

-- Create Table users
-- first name <varchar 60>, last name <varchar 60>, email address <varchar 120>, username <varchar 60 unique not null>, password <varchar 60 not null>, avatar image??? <TEXT>
create table users(
    id serial primary key,
    username varchar (60) unique not null,
    password varchar (60) not null,
    avatar_img text,
    email varchar (250),
    first_name varchar(60),
    last_name varchar(60)
);

-- Create Table Galleries
create table galleries(
    id serial primary key,
    gallery_name varchar(100) not null,
    thumbnail text,
    is_private boolean,
    views integer,
    times_favorited integer,
    shares integer,
    author text,
    user_id integer references users(id) ON DELETE CASCADE
);

create table gallery_favorites(
    primary key (user_id, favorited),
    user_id integer references users(id) ON DELETE CASCADE,
    favorited integer references galleries(id) ON DELETE CASCADE
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
    gallery_id integer references galleries(id) ON DELETE CASCADE
);

-- Create Table Images Captions
create table captions (
    id serial primary key,
    img1_caption varchar(30),
    img2_caption varchar(30),
    img3_caption varchar(30),
    img4_caption varchar(30),
    img5_caption varchar(30),
    img6_caption varchar(30),
    img7_caption varchar(30),
    img8_caption varchar(30),
    img9_caption varchar(30),
    img10_caption varchar(30),
    img11_caption varchar(30),
    img12_caption varchar(30),
    img13_caption varchar(30),
    img14_caption varchar(30),
    img15_caption varchar(30),
    images_id integer references images(id) ON DELETE CASCADE
);

-- Create Table Gallery_Presets
--Wall-Texture <TEXT>, Floor-Texture <TEXT>, Atmosphere-Lighting <TEXT>, User_id (foreign key to SPK of user)
create table gallery_presets(
    id serial primary key,
    ceiling_texture text,
    wall_texture text,
    floor_texture text,
    atmosphere_lighting text,
    music text,
    gallery_id integer references galleries(id) ON DELETE CASCADE
);