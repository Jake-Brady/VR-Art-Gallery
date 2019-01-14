-- test
insert into users(
username, password, email, first_name, last_name
) values (
'test', '$2a$10$jjkzSrpMwJCiiMpmEsWxiOwEidOQWD92Afi.b1dOGhzU5GfzhlN4C', 'test@aol.com', 'test', 'test'
);

insert into galleries(
gallery_name, thumbnail, is_private, views, times_favorited, user_id
) values (
'test gallery', 'https://image.spreadshirtmedia.com/image-server/v1/mp/designs/1001244579,width=178,height=178/generic-thumbnail.png', false, 0, 0, 1
);

insert into images
(image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, gallery_id)
values
('https://lovinlife.com/wp-content/uploads/2018/09/Dog.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpsAzFOuzE07HdIByvXNGeBeflF-9wRpdDHAYKfkQQQjS1AiOZ', 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/450px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg', 'https://upload.wikimedia.org/wikipedia/commons/f/f4/The_Scream.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/David_-_The_Death_of_Socrates.jpg/1280px-David_-_The_Death_of_Socrates.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Nighthawks_by_Edward_Hopper_1942.jpg/1920px-Nighthawks_by_Edward_Hopper_1942.jpg', 'https://upload.wikimedia.org/wikipedia/commons/5/53/Angers%2C_La_Maine%2C_Pays_de_la_Loire%2C_France_-_panoramio.jpg', 'https://uploads5.wikiart.org/images/edvard-munch/cupid-and-psyche-1907.jpg!Large.jpg', 'https://uploads2.wikiart.org/00198/images/pablo-picasso/old-guitarist-chicago.jpg!Large.jpg', 'https://a.1stdibscdn.com/e2-kleinveld-and-julien-photography-ode-to-wyeths-christinas-world-for-sale/a_1052/a_35080321541535432771/Ode_to_Wyeths_Christinas_World_E2_JonathanFerraraGalleryNewOrleans_master.jpg?width=768', 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Meisje_met_de_parel.jpg/768px-Meisje_met_de_parel.jpg', 'http://www.moma.org/media/W1siZiIsIjM4NjQ3MCJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=f6522ef85554762b', 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Caspar_David_Friedrich_-_Wanderer_above_the_sea_of_fog.jpg/800px-Caspar_David_Friedrich_-_Wanderer_above_the_sea_of_fog.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Caspar_David_Friedrich_-_Mondaufgang_am_Meer_-_Google_Art_Project.jpg/1280px-Caspar_David_Friedrich_-_Mondaufgang_am_Meer_-_Google_Art_Project.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Caspar_David_Friedrich_-_Der_einsame_Baum_-_Google_Art_Project.jpg/1280px-Caspar_David_Friedrich_-_Der_einsame_Baum_-_Google_Art_Project.jpg', 1);

insert into gallery_presets(
wall_texture, floor_texture, atmosphere_lighting, music, gallery_id
) values (
'grey slate', 'wood', 'light blue', 'gymnopedie', 1 
);

-- test2
insert into users(
username, password, email, first_name, last_name
) values (
'test2', '$2a$10$jjkzSrpMwJCiiMpmEsWxiOwEidOQWD92Afi.b1dOGhzU5GfzhlN4C', 'test2@aol.com', 'test2', 'test2'
);

insert into galleries(
gallery_name, thumbnail, is_private, views, times_favorited, user_id
) values (
'test2 gallery', 'https://image.spreadshirtmedia.com/image-server/v1/mp/designs/1001244579,width=178,height=178/generic-thumbnail.png', false, 0, 0, 2
);

insert into images
(image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, gallery_id)
values
('https://lovinlife.com/wp-content/uploads/2018/09/Dog.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpsAzFOuzE07HdIByvXNGeBeflF-9wRpdDHAYKfkQQQjS1AiOZ', 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/450px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg', 'https://upload.wikimedia.org/wikipedia/commons/f/f4/The_Scream.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/David_-_The_Death_of_Socrates.jpg/1280px-David_-_The_Death_of_Socrates.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Nighthawks_by_Edward_Hopper_1942.jpg/1920px-Nighthawks_by_Edward_Hopper_1942.jpg', 'https://upload.wikimedia.org/wikipedia/commons/5/53/Angers%2C_La_Maine%2C_Pays_de_la_Loire%2C_France_-_panoramio.jpg', 'https://uploads5.wikiart.org/images/edvard-munch/cupid-and-psyche-1907.jpg!Large.jpg', 'https://uploads2.wikiart.org/00198/images/pablo-picasso/old-guitarist-chicago.jpg!Large.jpg', 'https://a.1stdibscdn.com/e2-kleinveld-and-julien-photography-ode-to-wyeths-christinas-world-for-sale/a_1052/a_35080321541535432771/Ode_to_Wyeths_Christinas_World_E2_JonathanFerraraGalleryNewOrleans_master.jpg?width=768', 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Meisje_met_de_parel.jpg/768px-Meisje_met_de_parel.jpg', 'http://www.moma.org/media/W1siZiIsIjM4NjQ3MCJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=f6522ef85554762b', 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Caspar_David_Friedrich_-_Wanderer_above_the_sea_of_fog.jpg/800px-Caspar_David_Friedrich_-_Wanderer_above_the_sea_of_fog.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Caspar_David_Friedrich_-_Mondaufgang_am_Meer_-_Google_Art_Project.jpg/1280px-Caspar_David_Friedrich_-_Mondaufgang_am_Meer_-_Google_Art_Project.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Caspar_David_Friedrich_-_Der_einsame_Baum_-_Google_Art_Project.jpg/1280px-Caspar_David_Friedrich_-_Der_einsame_Baum_-_Google_Art_Project.jpg', 2);

insert into gallery_presets(
wall_texture, floor_texture, atmosphere_lighting, music, gallery_id
) values (
'grey slate', 'wood', 'light blue', 'gymnopedie', 2
);

insert into gallery_favorites(
user_id, favorited
) values (
1, 1
);

insert into gallery_favorites(
user_id, favorited
) values (
1, 2
);

insert into gallery_favorites(
user_id, favorited
) values (
2, 1
);

insert into gallery_favorites(
user_id, favorited
) values (
2, 2
);