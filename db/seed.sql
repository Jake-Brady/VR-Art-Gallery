-- Test Dummy Data (test, test2, artsy_kid, music_lover)
-- test
insert into users(
username, password, email, first_name, last_name
) values (
'test', '$2a$10$jjkzSrpMwJCiiMpmEsWxiOwEidOQWD92Afi.b1dOGhzU5GfzhlN4C', 'test@aol.com', 'test', 'test'
);

-- test2
insert into users(
username, password, email, first_name, last_name
) values (
'test2', '$2a$10$jjkzSrpMwJCiiMpmEsWxiOwEidOQWD92Afi.b1dOGhzU5GfzhlN4C', 'test2@aol.com', 'test2', 'test2'
);

-- artsy_kid
insert into users(
username, password, email, first_name, last_name
) values (
'artsy_kid', '$2a$10$jjkzSrpMwJCiiMpmEsWxiOwEidOQWD92Afi.b1dOGhzU5GfzhlN4C', 'artsy@aol.com', 'artsy', 'fartsy'
);

-- music_lover
insert into users (
username, password, email, first_name, last_name
) values (
'music_lover', '$2a$10$jjkzSrpMwJCiiMpmEsWxiOwEidOQWD92Afi.b1dOGhzU5GfzhlN4C', 'music@aol.com', 'music', 'lover'
);


-- Galleries / User - Test
insert into galleries(
gallery_name, thumbnail, is_private, views, times_favorited, shares, author, user_id
) values (
'testestbitchbitchweedweedpussyslayingcockgoblin', 'https://cdn-images-1.medium.com/max/2000/1*AnmQd3T5y_k9M0e0rAfxYQ.jpeg', false, 0, 1, 0, 'test', 1
);

insert into galleries(
gallery_name, thumbnail, is_private, views, times_favorited, shares, author, user_id
) values (
'test gallery 2', 'https://cdn-images-1.medium.com/max/2000/1*AnmQd3T5y_k9M0e0rAfxYQ.jpeg', false, 0, 1, 0, 'test', 1
);

insert into galleries(
gallery_name, thumbnail, is_private, views, times_favorited, shares, author, user_id
) values (
'test gallery 3', 'https://cdn-images-1.medium.com/max/2000/1*AnmQd3T5y_k9M0e0rAfxYQ.jpeg', false, 0, 1, 0, 'test', 1
);

insert into galleries(
gallery_name, thumbnail, is_private, views, times_favorited, shares, author, user_id
) values (
'test gallery 4', 'https://cdn-images-1.medium.com/max/2000/1*AnmQd3T5y_k9M0e0rAfxYQ.jpeg', false, 0, 1, 0, 'test', 1
);

insert into galleries(
gallery_name, thumbnail, is_private, views, times_favorited, shares, author, user_id
) values (
'test gallery 5', 'https://cdn-images-1.medium.com/max/2000/1*AnmQd3T5y_k9M0e0rAfxYQ.jpeg', false, 0, 1, 0, 'test', 1
);

insert into galleries(
gallery_name, thumbnail, is_private, views, times_favorited, shares, author, user_id
) values (
'test gallery 6', 'https://cdn-images-1.medium.com/max/2000/1*AnmQd3T5y_k9M0e0rAfxYQ.jpeg', false, 0, 1, 0, 'test', 1
);

insert into galleries(
gallery_name, thumbnail, is_private, views, times_favorited, shares, author, user_id
) values (
'test gallery 7', 'https://cdn-images-1.medium.com/max/2000/1*AnmQd3T5y_k9M0e0rAfxYQ.jpeg', false, 0, 1, 0, 'test', 1
);

insert into galleries(
gallery_name, thumbnail, is_private, views, times_favorited, shares, author, user_id
) values (
'test gallery 8', 'https://cdn-images-1.medium.com/max/2000/1*AnmQd3T5y_k9M0e0rAfxYQ.jpeg', false, 0, 1, 0, 'test', 1
);

insert into galleries(
gallery_name, thumbnail, is_private, views, times_favorited, shares, author, user_id
) values (
'test gallery 9', 'https://cdn-images-1.medium.com/max/2000/1*AnmQd3T5y_k9M0e0rAfxYQ.jpeg', false, 0, 1, 0, 'test', 1
);

insert into galleries(
gallery_name, thumbnail, is_private, views, times_favorited, shares, author, user_id
) values (
'test gallery 10', 'https://cdn-images-1.medium.com/max/2000/1*AnmQd3T5y_k9M0e0rAfxYQ.jpeg', false, 0, 1, 0, 'test', 1
);

insert into galleries(
gallery_name, thumbnail, is_private, views, times_favorited, shares, author, user_id
) values (
'test gallery 11', 'https://cdn-images-1.medium.com/max/2000/1*AnmQd3T5y_k9M0e0rAfxYQ.jpeg', false, 0, 1, 0, 'test', 1
);

insert into galleries(
gallery_name, thumbnail, is_private, views, times_favorited, shares, author, user_id
) values (
'test gallery 12', 'https://cdn-images-1.medium.com/max/2000/1*AnmQd3T5y_k9M0e0rAfxYQ.jpeg', false, 0, 1, 0, 'test', 1
);

-- images for User - Test/Galleries
insert into images
(image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, gallery_id)
values
('https://lovinlife.com/wp-content/uploads/2018/09/Dog.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpsAzFOuzE07HdIByvXNGeBeflF-9wRpdDHAYKfkQQQjS1AiOZ', 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/450px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg', 'https://upload.wikimedia.org/wikipedia/commons/f/f4/The_Scream.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/David_-_The_Death_of_Socrates.jpg/1280px-David_-_The_Death_of_Socrates.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Nighthawks_by_Edward_Hopper_1942.jpg/1920px-Nighthawks_by_Edward_Hopper_1942.jpg', 'https://upload.wikimedia.org/wikipedia/commons/5/53/Angers%2C_La_Maine%2C_Pays_de_la_Loire%2C_France_-_panoramio.jpg', 'https://uploads5.wikiart.org/images/edvard-munch/cupid-and-psyche-1907.jpg!Large.jpg', 'https://uploads2.wikiart.org/00198/images/pablo-picasso/old-guitarist-chicago.jpg!Large.jpg', 'https://a.1stdibscdn.com/e2-kleinveld-and-julien-photography-ode-to-wyeths-christinas-world-for-sale/a_1052/a_35080321541535432771/Ode_to_Wyeths_Christinas_World_E2_JonathanFerraraGalleryNewOrleans_master.jpg?width=768', 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Meisje_met_de_parel.jpg/768px-Meisje_met_de_parel.jpg', 'http://www.moma.org/media/W1siZiIsIjM4NjQ3MCJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=f6522ef85554762b', 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Caspar_David_Friedrich_-_Wanderer_above_the_sea_of_fog.jpg/800px-Caspar_David_Friedrich_-_Wanderer_above_the_sea_of_fog.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Caspar_David_Friedrich_-_Mondaufgang_am_Meer_-_Google_Art_Project.jpg/1280px-Caspar_David_Friedrich_-_Mondaufgang_am_Meer_-_Google_Art_Project.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Caspar_David_Friedrich_-_Der_einsame_Baum_-_Google_Art_Project.jpg/1280px-Caspar_David_Friedrich_-_Der_einsame_Baum_-_Google_Art_Project.jpg', 1);

insert into images
(image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, gallery_id)
values
('https://lovinlife.com/wp-content/uploads/2018/09/Dog.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpsAzFOuzE07HdIByvXNGeBeflF-9wRpdDHAYKfkQQQjS1AiOZ', 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/450px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg', 'https://upload.wikimedia.org/wikipedia/commons/f/f4/The_Scream.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/David_-_The_Death_of_Socrates.jpg/1280px-David_-_The_Death_of_Socrates.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Nighthawks_by_Edward_Hopper_1942.jpg/1920px-Nighthawks_by_Edward_Hopper_1942.jpg', 'https://upload.wikimedia.org/wikipedia/commons/5/53/Angers%2C_La_Maine%2C_Pays_de_la_Loire%2C_France_-_panoramio.jpg', 'https://uploads5.wikiart.org/images/edvard-munch/cupid-and-psyche-1907.jpg!Large.jpg', 'https://uploads2.wikiart.org/00198/images/pablo-picasso/old-guitarist-chicago.jpg!Large.jpg', 'https://a.1stdibscdn.com/e2-kleinveld-and-julien-photography-ode-to-wyeths-christinas-world-for-sale/a_1052/a_35080321541535432771/Ode_to_Wyeths_Christinas_World_E2_JonathanFerraraGalleryNewOrleans_master.jpg?width=768', 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Meisje_met_de_parel.jpg/768px-Meisje_met_de_parel.jpg', 'http://www.moma.org/media/W1siZiIsIjM4NjQ3MCJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=f6522ef85554762b', 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Caspar_David_Friedrich_-_Wanderer_above_the_sea_of_fog.jpg/800px-Caspar_David_Friedrich_-_Wanderer_above_the_sea_of_fog.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Caspar_David_Friedrich_-_Mondaufgang_am_Meer_-_Google_Art_Project.jpg/1280px-Caspar_David_Friedrich_-_Mondaufgang_am_Meer_-_Google_Art_Project.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Caspar_David_Friedrich_-_Der_einsame_Baum_-_Google_Art_Project.jpg/1280px-Caspar_David_Friedrich_-_Der_einsame_Baum_-_Google_Art_Project.jpg', 2);

insert into images
(image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, gallery_id)
values
('https://lovinlife.com/wp-content/uploads/2018/09/Dog.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpsAzFOuzE07HdIByvXNGeBeflF-9wRpdDHAYKfkQQQjS1AiOZ', 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/450px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg', 'https://upload.wikimedia.org/wikipedia/commons/f/f4/The_Scream.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/David_-_The_Death_of_Socrates.jpg/1280px-David_-_The_Death_of_Socrates.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Nighthawks_by_Edward_Hopper_1942.jpg/1920px-Nighthawks_by_Edward_Hopper_1942.jpg', 'https://upload.wikimedia.org/wikipedia/commons/5/53/Angers%2C_La_Maine%2C_Pays_de_la_Loire%2C_France_-_panoramio.jpg', 'https://uploads5.wikiart.org/images/edvard-munch/cupid-and-psyche-1907.jpg!Large.jpg', 'https://uploads2.wikiart.org/00198/images/pablo-picasso/old-guitarist-chicago.jpg!Large.jpg', 'https://a.1stdibscdn.com/e2-kleinveld-and-julien-photography-ode-to-wyeths-christinas-world-for-sale/a_1052/a_35080321541535432771/Ode_to_Wyeths_Christinas_World_E2_JonathanFerraraGalleryNewOrleans_master.jpg?width=768', 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Meisje_met_de_parel.jpg/768px-Meisje_met_de_parel.jpg', 'http://www.moma.org/media/W1siZiIsIjM4NjQ3MCJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=f6522ef85554762b', 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Caspar_David_Friedrich_-_Wanderer_above_the_sea_of_fog.jpg/800px-Caspar_David_Friedrich_-_Wanderer_above_the_sea_of_fog.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Caspar_David_Friedrich_-_Mondaufgang_am_Meer_-_Google_Art_Project.jpg/1280px-Caspar_David_Friedrich_-_Mondaufgang_am_Meer_-_Google_Art_Project.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Caspar_David_Friedrich_-_Der_einsame_Baum_-_Google_Art_Project.jpg/1280px-Caspar_David_Friedrich_-_Der_einsame_Baum_-_Google_Art_Project.jpg', 3);

insert into images
(image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, gallery_id)
values
('https://lovinlife.com/wp-content/uploads/2018/09/Dog.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpsAzFOuzE07HdIByvXNGeBeflF-9wRpdDHAYKfkQQQjS1AiOZ', 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/450px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg', 'https://upload.wikimedia.org/wikipedia/commons/f/f4/The_Scream.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/David_-_The_Death_of_Socrates.jpg/1280px-David_-_The_Death_of_Socrates.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Nighthawks_by_Edward_Hopper_1942.jpg/1920px-Nighthawks_by_Edward_Hopper_1942.jpg', 'https://upload.wikimedia.org/wikipedia/commons/5/53/Angers%2C_La_Maine%2C_Pays_de_la_Loire%2C_France_-_panoramio.jpg', 'https://uploads5.wikiart.org/images/edvard-munch/cupid-and-psyche-1907.jpg!Large.jpg', 'https://uploads2.wikiart.org/00198/images/pablo-picasso/old-guitarist-chicago.jpg!Large.jpg', 'https://a.1stdibscdn.com/e2-kleinveld-and-julien-photography-ode-to-wyeths-christinas-world-for-sale/a_1052/a_35080321541535432771/Ode_to_Wyeths_Christinas_World_E2_JonathanFerraraGalleryNewOrleans_master.jpg?width=768', 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Meisje_met_de_parel.jpg/768px-Meisje_met_de_parel.jpg', 'http://www.moma.org/media/W1siZiIsIjM4NjQ3MCJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=f6522ef85554762b', 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Caspar_David_Friedrich_-_Wanderer_above_the_sea_of_fog.jpg/800px-Caspar_David_Friedrich_-_Wanderer_above_the_sea_of_fog.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Caspar_David_Friedrich_-_Mondaufgang_am_Meer_-_Google_Art_Project.jpg/1280px-Caspar_David_Friedrich_-_Mondaufgang_am_Meer_-_Google_Art_Project.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Caspar_David_Friedrich_-_Der_einsame_Baum_-_Google_Art_Project.jpg/1280px-Caspar_David_Friedrich_-_Der_einsame_Baum_-_Google_Art_Project.jpg', 4);

insert into images
(image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, gallery_id)
values
('https://lovinlife.com/wp-content/uploads/2018/09/Dog.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpsAzFOuzE07HdIByvXNGeBeflF-9wRpdDHAYKfkQQQjS1AiOZ', 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/450px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg', 'https://upload.wikimedia.org/wikipedia/commons/f/f4/The_Scream.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/David_-_The_Death_of_Socrates.jpg/1280px-David_-_The_Death_of_Socrates.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Nighthawks_by_Edward_Hopper_1942.jpg/1920px-Nighthawks_by_Edward_Hopper_1942.jpg', 'https://upload.wikimedia.org/wikipedia/commons/5/53/Angers%2C_La_Maine%2C_Pays_de_la_Loire%2C_France_-_panoramio.jpg', 'https://uploads5.wikiart.org/images/edvard-munch/cupid-and-psyche-1907.jpg!Large.jpg', 'https://uploads2.wikiart.org/00198/images/pablo-picasso/old-guitarist-chicago.jpg!Large.jpg', 'https://a.1stdibscdn.com/e2-kleinveld-and-julien-photography-ode-to-wyeths-christinas-world-for-sale/a_1052/a_35080321541535432771/Ode_to_Wyeths_Christinas_World_E2_JonathanFerraraGalleryNewOrleans_master.jpg?width=768', 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Meisje_met_de_parel.jpg/768px-Meisje_met_de_parel.jpg', 'http://www.moma.org/media/W1siZiIsIjM4NjQ3MCJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=f6522ef85554762b', 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Caspar_David_Friedrich_-_Wanderer_above_the_sea_of_fog.jpg/800px-Caspar_David_Friedrich_-_Wanderer_above_the_sea_of_fog.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Caspar_David_Friedrich_-_Mondaufgang_am_Meer_-_Google_Art_Project.jpg/1280px-Caspar_David_Friedrich_-_Mondaufgang_am_Meer_-_Google_Art_Project.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Caspar_David_Friedrich_-_Der_einsame_Baum_-_Google_Art_Project.jpg/1280px-Caspar_David_Friedrich_-_Der_einsame_Baum_-_Google_Art_Project.jpg', 5);

insert into images
(image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, gallery_id)
values
('https://lovinlife.com/wp-content/uploads/2018/09/Dog.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpsAzFOuzE07HdIByvXNGeBeflF-9wRpdDHAYKfkQQQjS1AiOZ', 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/450px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg', 'https://upload.wikimedia.org/wikipedia/commons/f/f4/The_Scream.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/David_-_The_Death_of_Socrates.jpg/1280px-David_-_The_Death_of_Socrates.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Nighthawks_by_Edward_Hopper_1942.jpg/1920px-Nighthawks_by_Edward_Hopper_1942.jpg', 'https://upload.wikimedia.org/wikipedia/commons/5/53/Angers%2C_La_Maine%2C_Pays_de_la_Loire%2C_France_-_panoramio.jpg', 'https://uploads5.wikiart.org/images/edvard-munch/cupid-and-psyche-1907.jpg!Large.jpg', 'https://uploads2.wikiart.org/00198/images/pablo-picasso/old-guitarist-chicago.jpg!Large.jpg', 'https://a.1stdibscdn.com/e2-kleinveld-and-julien-photography-ode-to-wyeths-christinas-world-for-sale/a_1052/a_35080321541535432771/Ode_to_Wyeths_Christinas_World_E2_JonathanFerraraGalleryNewOrleans_master.jpg?width=768', 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Meisje_met_de_parel.jpg/768px-Meisje_met_de_parel.jpg', 'http://www.moma.org/media/W1siZiIsIjM4NjQ3MCJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=f6522ef85554762b', 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Caspar_David_Friedrich_-_Wanderer_above_the_sea_of_fog.jpg/800px-Caspar_David_Friedrich_-_Wanderer_above_the_sea_of_fog.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Caspar_David_Friedrich_-_Mondaufgang_am_Meer_-_Google_Art_Project.jpg/1280px-Caspar_David_Friedrich_-_Mondaufgang_am_Meer_-_Google_Art_Project.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Caspar_David_Friedrich_-_Der_einsame_Baum_-_Google_Art_Project.jpg/1280px-Caspar_David_Friedrich_-_Der_einsame_Baum_-_Google_Art_Project.jpg', 6);

insert into images
(image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, gallery_id)
values
('https://lovinlife.com/wp-content/uploads/2018/09/Dog.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpsAzFOuzE07HdIByvXNGeBeflF-9wRpdDHAYKfkQQQjS1AiOZ', 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/450px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg', 'https://upload.wikimedia.org/wikipedia/commons/f/f4/The_Scream.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/David_-_The_Death_of_Socrates.jpg/1280px-David_-_The_Death_of_Socrates.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Nighthawks_by_Edward_Hopper_1942.jpg/1920px-Nighthawks_by_Edward_Hopper_1942.jpg', 'https://upload.wikimedia.org/wikipedia/commons/5/53/Angers%2C_La_Maine%2C_Pays_de_la_Loire%2C_France_-_panoramio.jpg', 'https://uploads5.wikiart.org/images/edvard-munch/cupid-and-psyche-1907.jpg!Large.jpg', 'https://uploads2.wikiart.org/00198/images/pablo-picasso/old-guitarist-chicago.jpg!Large.jpg', 'https://a.1stdibscdn.com/e2-kleinveld-and-julien-photography-ode-to-wyeths-christinas-world-for-sale/a_1052/a_35080321541535432771/Ode_to_Wyeths_Christinas_World_E2_JonathanFerraraGalleryNewOrleans_master.jpg?width=768', 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Meisje_met_de_parel.jpg/768px-Meisje_met_de_parel.jpg', 'http://www.moma.org/media/W1siZiIsIjM4NjQ3MCJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=f6522ef85554762b', 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Caspar_David_Friedrich_-_Wanderer_above_the_sea_of_fog.jpg/800px-Caspar_David_Friedrich_-_Wanderer_above_the_sea_of_fog.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Caspar_David_Friedrich_-_Mondaufgang_am_Meer_-_Google_Art_Project.jpg/1280px-Caspar_David_Friedrich_-_Mondaufgang_am_Meer_-_Google_Art_Project.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Caspar_David_Friedrich_-_Der_einsame_Baum_-_Google_Art_Project.jpg/1280px-Caspar_David_Friedrich_-_Der_einsame_Baum_-_Google_Art_Project.jpg', 7);

insert into images
(image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, gallery_id)
values
('https://lovinlife.com/wp-content/uploads/2018/09/Dog.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpsAzFOuzE07HdIByvXNGeBeflF-9wRpdDHAYKfkQQQjS1AiOZ', 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/450px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg', 'https://upload.wikimedia.org/wikipedia/commons/f/f4/The_Scream.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/David_-_The_Death_of_Socrates.jpg/1280px-David_-_The_Death_of_Socrates.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Nighthawks_by_Edward_Hopper_1942.jpg/1920px-Nighthawks_by_Edward_Hopper_1942.jpg', 'https://upload.wikimedia.org/wikipedia/commons/5/53/Angers%2C_La_Maine%2C_Pays_de_la_Loire%2C_France_-_panoramio.jpg', 'https://uploads5.wikiart.org/images/edvard-munch/cupid-and-psyche-1907.jpg!Large.jpg', 'https://uploads2.wikiart.org/00198/images/pablo-picasso/old-guitarist-chicago.jpg!Large.jpg', 'https://a.1stdibscdn.com/e2-kleinveld-and-julien-photography-ode-to-wyeths-christinas-world-for-sale/a_1052/a_35080321541535432771/Ode_to_Wyeths_Christinas_World_E2_JonathanFerraraGalleryNewOrleans_master.jpg?width=768', 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Meisje_met_de_parel.jpg/768px-Meisje_met_de_parel.jpg', 'http://www.moma.org/media/W1siZiIsIjM4NjQ3MCJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=f6522ef85554762b', 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Caspar_David_Friedrich_-_Wanderer_above_the_sea_of_fog.jpg/800px-Caspar_David_Friedrich_-_Wanderer_above_the_sea_of_fog.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Caspar_David_Friedrich_-_Mondaufgang_am_Meer_-_Google_Art_Project.jpg/1280px-Caspar_David_Friedrich_-_Mondaufgang_am_Meer_-_Google_Art_Project.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Caspar_David_Friedrich_-_Der_einsame_Baum_-_Google_Art_Project.jpg/1280px-Caspar_David_Friedrich_-_Der_einsame_Baum_-_Google_Art_Project.jpg', 8);

insert into images
(image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, gallery_id)
values
('https://lovinlife.com/wp-content/uploads/2018/09/Dog.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpsAzFOuzE07HdIByvXNGeBeflF-9wRpdDHAYKfkQQQjS1AiOZ', 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/450px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg', 'https://upload.wikimedia.org/wikipedia/commons/f/f4/The_Scream.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/David_-_The_Death_of_Socrates.jpg/1280px-David_-_The_Death_of_Socrates.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Nighthawks_by_Edward_Hopper_1942.jpg/1920px-Nighthawks_by_Edward_Hopper_1942.jpg', 'https://upload.wikimedia.org/wikipedia/commons/5/53/Angers%2C_La_Maine%2C_Pays_de_la_Loire%2C_France_-_panoramio.jpg', 'https://uploads5.wikiart.org/images/edvard-munch/cupid-and-psyche-1907.jpg!Large.jpg', 'https://uploads2.wikiart.org/00198/images/pablo-picasso/old-guitarist-chicago.jpg!Large.jpg', 'https://a.1stdibscdn.com/e2-kleinveld-and-julien-photography-ode-to-wyeths-christinas-world-for-sale/a_1052/a_35080321541535432771/Ode_to_Wyeths_Christinas_World_E2_JonathanFerraraGalleryNewOrleans_master.jpg?width=768', 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Meisje_met_de_parel.jpg/768px-Meisje_met_de_parel.jpg', 'http://www.moma.org/media/W1siZiIsIjM4NjQ3MCJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=f6522ef85554762b', 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Caspar_David_Friedrich_-_Wanderer_above_the_sea_of_fog.jpg/800px-Caspar_David_Friedrich_-_Wanderer_above_the_sea_of_fog.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Caspar_David_Friedrich_-_Mondaufgang_am_Meer_-_Google_Art_Project.jpg/1280px-Caspar_David_Friedrich_-_Mondaufgang_am_Meer_-_Google_Art_Project.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Caspar_David_Friedrich_-_Der_einsame_Baum_-_Google_Art_Project.jpg/1280px-Caspar_David_Friedrich_-_Der_einsame_Baum_-_Google_Art_Project.jpg', 9);

insert into images
(image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, gallery_id)
values
('https://lovinlife.com/wp-content/uploads/2018/09/Dog.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpsAzFOuzE07HdIByvXNGeBeflF-9wRpdDHAYKfkQQQjS1AiOZ', 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/450px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg', 'https://upload.wikimedia.org/wikipedia/commons/f/f4/The_Scream.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/David_-_The_Death_of_Socrates.jpg/1280px-David_-_The_Death_of_Socrates.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Nighthawks_by_Edward_Hopper_1942.jpg/1920px-Nighthawks_by_Edward_Hopper_1942.jpg', 'https://upload.wikimedia.org/wikipedia/commons/5/53/Angers%2C_La_Maine%2C_Pays_de_la_Loire%2C_France_-_panoramio.jpg', 'https://uploads5.wikiart.org/images/edvard-munch/cupid-and-psyche-1907.jpg!Large.jpg', 'https://uploads2.wikiart.org/00198/images/pablo-picasso/old-guitarist-chicago.jpg!Large.jpg', 'https://a.1stdibscdn.com/e2-kleinveld-and-julien-photography-ode-to-wyeths-christinas-world-for-sale/a_1052/a_35080321541535432771/Ode_to_Wyeths_Christinas_World_E2_JonathanFerraraGalleryNewOrleans_master.jpg?width=768', 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Meisje_met_de_parel.jpg/768px-Meisje_met_de_parel.jpg', 'http://www.moma.org/media/W1siZiIsIjM4NjQ3MCJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=f6522ef85554762b', 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Caspar_David_Friedrich_-_Wanderer_above_the_sea_of_fog.jpg/800px-Caspar_David_Friedrich_-_Wanderer_above_the_sea_of_fog.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Caspar_David_Friedrich_-_Mondaufgang_am_Meer_-_Google_Art_Project.jpg/1280px-Caspar_David_Friedrich_-_Mondaufgang_am_Meer_-_Google_Art_Project.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Caspar_David_Friedrich_-_Der_einsame_Baum_-_Google_Art_Project.jpg/1280px-Caspar_David_Friedrich_-_Der_einsame_Baum_-_Google_Art_Project.jpg', 10);

insert into images
(image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, gallery_id)
values
('https://lovinlife.com/wp-content/uploads/2018/09/Dog.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpsAzFOuzE07HdIByvXNGeBeflF-9wRpdDHAYKfkQQQjS1AiOZ', 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/450px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg', 'https://upload.wikimedia.org/wikipedia/commons/f/f4/The_Scream.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/David_-_The_Death_of_Socrates.jpg/1280px-David_-_The_Death_of_Socrates.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Nighthawks_by_Edward_Hopper_1942.jpg/1920px-Nighthawks_by_Edward_Hopper_1942.jpg', 'https://upload.wikimedia.org/wikipedia/commons/5/53/Angers%2C_La_Maine%2C_Pays_de_la_Loire%2C_France_-_panoramio.jpg', 'https://uploads5.wikiart.org/images/edvard-munch/cupid-and-psyche-1907.jpg!Large.jpg', 'https://uploads2.wikiart.org/00198/images/pablo-picasso/old-guitarist-chicago.jpg!Large.jpg', 'https://a.1stdibscdn.com/e2-kleinveld-and-julien-photography-ode-to-wyeths-christinas-world-for-sale/a_1052/a_35080321541535432771/Ode_to_Wyeths_Christinas_World_E2_JonathanFerraraGalleryNewOrleans_master.jpg?width=768', 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Meisje_met_de_parel.jpg/768px-Meisje_met_de_parel.jpg', 'http://www.moma.org/media/W1siZiIsIjM4NjQ3MCJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=f6522ef85554762b', 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Caspar_David_Friedrich_-_Wanderer_above_the_sea_of_fog.jpg/800px-Caspar_David_Friedrich_-_Wanderer_above_the_sea_of_fog.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Caspar_David_Friedrich_-_Mondaufgang_am_Meer_-_Google_Art_Project.jpg/1280px-Caspar_David_Friedrich_-_Mondaufgang_am_Meer_-_Google_Art_Project.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Caspar_David_Friedrich_-_Der_einsame_Baum_-_Google_Art_Project.jpg/1280px-Caspar_David_Friedrich_-_Der_einsame_Baum_-_Google_Art_Project.jpg', 11);

insert into images
(image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, gallery_id)
values
('https://lovinlife.com/wp-content/uploads/2018/09/Dog.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpsAzFOuzE07HdIByvXNGeBeflF-9wRpdDHAYKfkQQQjS1AiOZ', 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/450px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg', 'https://upload.wikimedia.org/wikipedia/commons/f/f4/The_Scream.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/David_-_The_Death_of_Socrates.jpg/1280px-David_-_The_Death_of_Socrates.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Nighthawks_by_Edward_Hopper_1942.jpg/1920px-Nighthawks_by_Edward_Hopper_1942.jpg', 'https://upload.wikimedia.org/wikipedia/commons/5/53/Angers%2C_La_Maine%2C_Pays_de_la_Loire%2C_France_-_panoramio.jpg', 'https://uploads5.wikiart.org/images/edvard-munch/cupid-and-psyche-1907.jpg!Large.jpg', 'https://uploads2.wikiart.org/00198/images/pablo-picasso/old-guitarist-chicago.jpg!Large.jpg', 'https://a.1stdibscdn.com/e2-kleinveld-and-julien-photography-ode-to-wyeths-christinas-world-for-sale/a_1052/a_35080321541535432771/Ode_to_Wyeths_Christinas_World_E2_JonathanFerraraGalleryNewOrleans_master.jpg?width=768', 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Meisje_met_de_parel.jpg/768px-Meisje_met_de_parel.jpg', 'http://www.moma.org/media/W1siZiIsIjM4NjQ3MCJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=f6522ef85554762b', 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Caspar_David_Friedrich_-_Wanderer_above_the_sea_of_fog.jpg/800px-Caspar_David_Friedrich_-_Wanderer_above_the_sea_of_fog.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Caspar_David_Friedrich_-_Mondaufgang_am_Meer_-_Google_Art_Project.jpg/1280px-Caspar_David_Friedrich_-_Mondaufgang_am_Meer_-_Google_Art_Project.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Caspar_David_Friedrich_-_Der_einsame_Baum_-_Google_Art_Project.jpg/1280px-Caspar_David_Friedrich_-_Der_einsame_Baum_-_Google_Art_Project.jpg', 12);

--Captions for test gallery images - 1 thru 12
insert into captions(
img1_caption,
img2_caption,
img3_caption,
img4_caption,
img5_caption,
img6_caption,
img7_caption,
img8_caption,
img9_caption,
img10_caption,
img11_caption,
img12_caption,
img13_caption,
img14_caption,
img15_caption,
images_id 
) VALUES (
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
1
);

insert into captions(
img1_caption,
img2_caption,
img3_caption,
img4_caption,
img5_caption,
img6_caption,
img7_caption,
img8_caption,
img9_caption,
img10_caption,
img11_caption,
img12_caption,
img13_caption,
img14_caption,
img15_caption,
images_id 
) VALUES (
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
2
);

insert into captions(
img1_caption,
img2_caption,
img3_caption,
img4_caption,
img5_caption,
img6_caption,
img7_caption,
img8_caption,
img9_caption,
img10_caption,
img11_caption,
img12_caption,
img13_caption,
img14_caption,
img15_caption,
images_id 
) VALUES (
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
3
);

insert into captions(
img1_caption,
img2_caption,
img3_caption,
img4_caption,
img5_caption,
img6_caption,
img7_caption,
img8_caption,
img9_caption,
img10_caption,
img11_caption,
img12_caption,
img13_caption,
img14_caption,
img15_caption,
images_id 
) VALUES (
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
4
);

insert into captions(
img1_caption,
img2_caption,
img3_caption,
img4_caption,
img5_caption,
img6_caption,
img7_caption,
img8_caption,
img9_caption,
img10_caption,
img11_caption,
img12_caption,
img13_caption,
img14_caption,
img15_caption,
images_id 
) VALUES (
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
5
);

insert into captions(
img1_caption,
img2_caption,
img3_caption,
img4_caption,
img5_caption,
img6_caption,
img7_caption,
img8_caption,
img9_caption,
img10_caption,
img11_caption,
img12_caption,
img13_caption,
img14_caption,
img15_caption,
images_id 
) VALUES (
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
6
);

insert into captions(
img1_caption,
img2_caption,
img3_caption,
img4_caption,
img5_caption,
img6_caption,
img7_caption,
img8_caption,
img9_caption,
img10_caption,
img11_caption,
img12_caption,
img13_caption,
img14_caption,
img15_caption,
images_id 
) VALUES (
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
7
);

insert into captions(
img1_caption,
img2_caption,
img3_caption,
img4_caption,
img5_caption,
img6_caption,
img7_caption,
img8_caption,
img9_caption,
img10_caption,
img11_caption,
img12_caption,
img13_caption,
img14_caption,
img15_caption,
images_id 
) VALUES (
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
8
);

insert into captions(
img1_caption,
img2_caption,
img3_caption,
img4_caption,
img5_caption,
img6_caption,
img7_caption,
img8_caption,
img9_caption,
img10_caption,
img11_caption,
img12_caption,
img13_caption,
img14_caption,
img15_caption,
images_id 
) VALUES (
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
9
);

insert into captions(
img1_caption,
img2_caption,
img3_caption,
img4_caption,
img5_caption,
img6_caption,
img7_caption,
img8_caption,
img9_caption,
img10_caption,
img11_caption,
img12_caption,
img13_caption,
img14_caption,
img15_caption,
images_id 
) VALUES (
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
10
);

insert into captions(
img1_caption,
img2_caption,
img3_caption,
img4_caption,
img5_caption,
img6_caption,
img7_caption,
img8_caption,
img9_caption,
img10_caption,
img11_caption,
img12_caption,
img13_caption,
img14_caption,
img15_caption,
images_id 
) VALUES (
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
11
);

insert into captions(
img1_caption,
img2_caption,
img3_caption,
img4_caption,
img5_caption,
img6_caption,
img7_caption,
img8_caption,
img9_caption,
img10_caption,
img11_caption,
img12_caption,
img13_caption,
img14_caption,
img15_caption,
images_id 
) VALUES (
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
'test Caption',
12
);


-- Gallery Presets for test galleries
insert into gallery_presets(
ceiling_texture, wall_texture, floor_texture, atmosphere_lighting, music, gallery_id
) values (
'marble', 'grey slate', 'wood', 'light blue', 'gymnopedie', 1 
);

insert into gallery_presets(
ceiling_texture, wall_texture, floor_texture, atmosphere_lighting, music, gallery_id
) values (
'marble','grey slate', 'wood', 'light blue', 'gymnopedie', 2 
);

insert into gallery_presets(
ceiling_texture, wall_texture, floor_texture, atmosphere_lighting, music, gallery_id
) values (
'marble','grey slate', 'wood', 'light blue', 'gymnopedie', 3
);

insert into gallery_presets(
ceiling_texture, wall_texture, floor_texture, atmosphere_lighting, music, gallery_id
) values (
'marble','grey slate', 'wood', 'light blue', 'gymnopedie', 4
);

insert into gallery_presets(
ceiling_texture, wall_texture, floor_texture, atmosphere_lighting, music, gallery_id
) values (
'marble','grey slate', 'wood', 'light blue', 'gymnopedie', 5
);

insert into gallery_presets(
ceiling_texture, wall_texture, floor_texture, atmosphere_lighting, music, gallery_id
) values (
'marble','grey slate', 'wood', 'light blue', 'gymnopedie', 6
);

insert into gallery_presets(
ceiling_texture, wall_texture, floor_texture, atmosphere_lighting, music, gallery_id
) values (
'marble','grey slate', 'wood', 'light blue', 'gymnopedie', 7
);

insert into gallery_presets(
ceiling_texture, wall_texture, floor_texture, atmosphere_lighting, music, gallery_id
) values (
'marble','grey slate', 'wood', 'light blue', 'gymnopedie', 8
);

insert into gallery_presets(
ceiling_texture, wall_texture, floor_texture, atmosphere_lighting, music, gallery_id
) values (
'marble','grey slate', 'wood', 'light blue', 'gymnopedie', 9
);

insert into gallery_presets(
ceiling_texture, wall_texture, floor_texture, atmosphere_lighting, music, gallery_id
) values (
'marble','grey slate', 'wood', 'light blue', 'gymnopedie', 10
);

insert into gallery_presets(
ceiling_texture, wall_texture, floor_texture, atmosphere_lighting, music, gallery_id
) values (
'marble','grey slate', 'wood', 'light blue', 'gymnopedie', 11
);

insert into gallery_presets(
ceiling_texture, wall_texture, floor_texture, atmosphere_lighting, music, gallery_id
) values (
'marble','grey slate', 'wood', 'light blue', 'gymnopedie', 12
);

-- Galleries for test2
insert into galleries(
gallery_name, thumbnail, is_private, views, times_favorited, shares, author, user_id
) values (
'test2 gallery', 'https://cdn-images-1.medium.com/max/2000/1*AnmQd3T5y_k9M0e0rAfxYQ.jpeg', false, 0, 1, 0, 'test2', 2
);

insert into galleries(
gallery_name, thumbnail, is_private, views, times_favorited, shares, author, user_id
) values (
'test2 gallery 2', 'https://cdn-images-1.medium.com/max/2000/1*AnmQd3T5y_k9M0e0rAfxYQ.jpeg', false, 0, 1, 0, 'test2', 2
);

insert into galleries(
gallery_name, thumbnail, is_private, views, times_favorited, shares, author, user_id
) values (
'test2 gallery 3', 'https://cdn-images-1.medium.com/max/2000/1*AnmQd3T5y_k9M0e0rAfxYQ.jpeg', false, 0, 1, 0, 'test2', 2
);

insert into images
(image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, gallery_id)
values
('https://lovinlife.com/wp-content/uploads/2018/09/Dog.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpsAzFOuzE07HdIByvXNGeBeflF-9wRpdDHAYKfkQQQjS1AiOZ', 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/450px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg', 'https://upload.wikimedia.org/wikipedia/commons/f/f4/The_Scream.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/David_-_The_Death_of_Socrates.jpg/1280px-David_-_The_Death_of_Socrates.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Nighthawks_by_Edward_Hopper_1942.jpg/1920px-Nighthawks_by_Edward_Hopper_1942.jpg', 'https://upload.wikimedia.org/wikipedia/commons/5/53/Angers%2C_La_Maine%2C_Pays_de_la_Loire%2C_France_-_panoramio.jpg', 'https://uploads5.wikiart.org/images/edvard-munch/cupid-and-psyche-1907.jpg!Large.jpg', 'https://uploads2.wikiart.org/00198/images/pablo-picasso/old-guitarist-chicago.jpg!Large.jpg', 'https://a.1stdibscdn.com/e2-kleinveld-and-julien-photography-ode-to-wyeths-christinas-world-for-sale/a_1052/a_35080321541535432771/Ode_to_Wyeths_Christinas_World_E2_JonathanFerraraGalleryNewOrleans_master.jpg?width=768', 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Meisje_met_de_parel.jpg/768px-Meisje_met_de_parel.jpg', 'http://www.moma.org/media/W1siZiIsIjM4NjQ3MCJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=f6522ef85554762b', 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Caspar_David_Friedrich_-_Wanderer_above_the_sea_of_fog.jpg/800px-Caspar_David_Friedrich_-_Wanderer_above_the_sea_of_fog.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Caspar_David_Friedrich_-_Mondaufgang_am_Meer_-_Google_Art_Project.jpg/1280px-Caspar_David_Friedrich_-_Mondaufgang_am_Meer_-_Google_Art_Project.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Caspar_David_Friedrich_-_Der_einsame_Baum_-_Google_Art_Project.jpg/1280px-Caspar_David_Friedrich_-_Der_einsame_Baum_-_Google_Art_Project.jpg', 13);

insert into images
(image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, gallery_id)
values
('https://lovinlife.com/wp-content/uploads/2018/09/Dog.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpsAzFOuzE07HdIByvXNGeBeflF-9wRpdDHAYKfkQQQjS1AiOZ', 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/450px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg', 'https://upload.wikimedia.org/wikipedia/commons/f/f4/The_Scream.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/David_-_The_Death_of_Socrates.jpg/1280px-David_-_The_Death_of_Socrates.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Nighthawks_by_Edward_Hopper_1942.jpg/1920px-Nighthawks_by_Edward_Hopper_1942.jpg', 'https://upload.wikimedia.org/wikipedia/commons/5/53/Angers%2C_La_Maine%2C_Pays_de_la_Loire%2C_France_-_panoramio.jpg', 'https://uploads5.wikiart.org/images/edvard-munch/cupid-and-psyche-1907.jpg!Large.jpg', 'https://uploads2.wikiart.org/00198/images/pablo-picasso/old-guitarist-chicago.jpg!Large.jpg', 'https://a.1stdibscdn.com/e2-kleinveld-and-julien-photography-ode-to-wyeths-christinas-world-for-sale/a_1052/a_35080321541535432771/Ode_to_Wyeths_Christinas_World_E2_JonathanFerraraGalleryNewOrleans_master.jpg?width=768', 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Meisje_met_de_parel.jpg/768px-Meisje_met_de_parel.jpg', 'http://www.moma.org/media/W1siZiIsIjM4NjQ3MCJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=f6522ef85554762b', 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Caspar_David_Friedrich_-_Wanderer_above_the_sea_of_fog.jpg/800px-Caspar_David_Friedrich_-_Wanderer_above_the_sea_of_fog.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Caspar_David_Friedrich_-_Mondaufgang_am_Meer_-_Google_Art_Project.jpg/1280px-Caspar_David_Friedrich_-_Mondaufgang_am_Meer_-_Google_Art_Project.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Caspar_David_Friedrich_-_Der_einsame_Baum_-_Google_Art_Project.jpg/1280px-Caspar_David_Friedrich_-_Der_einsame_Baum_-_Google_Art_Project.jpg', 14);

insert into images
(image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, gallery_id)
values
('https://lovinlife.com/wp-content/uploads/2018/09/Dog.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpsAzFOuzE07HdIByvXNGeBeflF-9wRpdDHAYKfkQQQjS1AiOZ', 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/450px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg', 'https://upload.wikimedia.org/wikipedia/commons/f/f4/The_Scream.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/David_-_The_Death_of_Socrates.jpg/1280px-David_-_The_Death_of_Socrates.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Nighthawks_by_Edward_Hopper_1942.jpg/1920px-Nighthawks_by_Edward_Hopper_1942.jpg', 'https://upload.wikimedia.org/wikipedia/commons/5/53/Angers%2C_La_Maine%2C_Pays_de_la_Loire%2C_France_-_panoramio.jpg', 'https://uploads5.wikiart.org/images/edvard-munch/cupid-and-psyche-1907.jpg!Large.jpg', 'https://uploads2.wikiart.org/00198/images/pablo-picasso/old-guitarist-chicago.jpg!Large.jpg', 'https://a.1stdibscdn.com/e2-kleinveld-and-julien-photography-ode-to-wyeths-christinas-world-for-sale/a_1052/a_35080321541535432771/Ode_to_Wyeths_Christinas_World_E2_JonathanFerraraGalleryNewOrleans_master.jpg?width=768', 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Meisje_met_de_parel.jpg/768px-Meisje_met_de_parel.jpg', 'http://www.moma.org/media/W1siZiIsIjM4NjQ3MCJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=f6522ef85554762b', 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Caspar_David_Friedrich_-_Wanderer_above_the_sea_of_fog.jpg/800px-Caspar_David_Friedrich_-_Wanderer_above_the_sea_of_fog.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Caspar_David_Friedrich_-_Mondaufgang_am_Meer_-_Google_Art_Project.jpg/1280px-Caspar_David_Friedrich_-_Mondaufgang_am_Meer_-_Google_Art_Project.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Caspar_David_Friedrich_-_Der_einsame_Baum_-_Google_Art_Project.jpg/1280px-Caspar_David_Friedrich_-_Der_einsame_Baum_-_Google_Art_Project.jpg', 15);

-- gallery_presets for test2 galleries
insert into gallery_presets(
ceiling_texture, wall_texture, floor_texture, atmosphere_lighting, music, gallery_id
) values (
'marble','grey slate', 'wood', 'light blue', 'gymnopedie', 13
);

insert into gallery_presets(
ceiling_texture, wall_texture, floor_texture, atmosphere_lighting, music, gallery_id
) values (
'marble','grey slate', 'wood', 'light blue', 'gymnopedie', 14
);

insert into gallery_presets(
ceiling_texture, wall_texture, floor_texture, atmosphere_lighting, music, gallery_id
) values (
'marble','grey slate', 'wood', 'light blue', 'gymnopedie', 15
);

--  galleries for artsy_kid
insert into galleries (
gallery_name, thumbnail, is_private, views, times_favorited, shares, author, user_id
) values (
'artsy_kid gallery', 'https://www.billboard.com/files/styles/900_wide/public/media/29-tyler-the-creator-flower-boy-album-art-2017-billboard-1240.jpg', false, 0, 1, 0, 'artsy_kid', 3
);

insert into galleries (
gallery_name, thumbnail, is_private, views, times_favorited, shares, author, user_id
) values (
'artsy_kid gallery 2', 'https://www.billboard.com/files/styles/900_wide/public/media/29-tyler-the-creator-flower-boy-album-art-2017-billboard-1240.jpg', false, 0, 1, 0, 'artsy_kid', 3
);

insert into galleries (
gallery_name, thumbnail, is_private, views, times_favorited, shares, author, user_id
) values (
'artsy_kid gallery 3', 'https://www.billboard.com/files/styles/900_wide/public/media/29-tyler-the-creator-flower-boy-album-art-2017-billboard-1240.jpg', false, 0, 1, 0, 'artsy_kid', 3
);

-- images for artsy_kid galleries
insert into images (
image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, gallery_id
) values (
'https://images.genius.com/24afdee8d5f93e026131602e5b86d7c3.422x422x1.jpg', 'https://images.genius.com/24afdee8d5f93e026131602e5b86d7c3.422x422x1.jpg', 'https://images.genius.com/24afdee8d5f93e026131602e5b86d7c3.422x422x1.jpg', 'https://images.genius.com/24afdee8d5f93e026131602e5b86d7c3.422x422x1.jpg', 'https://images.genius.com/24afdee8d5f93e026131602e5b86d7c3.422x422x1.jpg', 'https://images.genius.com/24afdee8d5f93e026131602e5b86d7c3.422x422x1.jpg', 'https://images.genius.com/24afdee8d5f93e026131602e5b86d7c3.422x422x1.jpg', 'https://images.genius.com/24afdee8d5f93e026131602e5b86d7c3.422x422x1.jpg', 'https://images.genius.com/24afdee8d5f93e026131602e5b86d7c3.422x422x1.jpg', 'https://images.genius.com/24afdee8d5f93e026131602e5b86d7c3.422x422x1.jpg', 'https://images.genius.com/24afdee8d5f93e026131602e5b86d7c3.422x422x1.jpg', 'https://images.genius.com/24afdee8d5f93e026131602e5b86d7c3.422x422x1.jpg', 'https://images.genius.com/24afdee8d5f93e026131602e5b86d7c3.422x422x1.jpg', 'https://images.genius.com/24afdee8d5f93e026131602e5b86d7c3.422x422x1.jpg', 'https://images.genius.com/24afdee8d5f93e026131602e5b86d7c3.422x422x1.jpg', 16
);

insert into images (
image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, gallery_id
) values (
'https://images.genius.com/24afdee8d5f93e026131602e5b86d7c3.422x422x1.jpg', 'https://images.genius.com/24afdee8d5f93e026131602e5b86d7c3.422x422x1.jpg', 'https://images.genius.com/24afdee8d5f93e026131602e5b86d7c3.422x422x1.jpg', 'https://images.genius.com/24afdee8d5f93e026131602e5b86d7c3.422x422x1.jpg', 'https://images.genius.com/24afdee8d5f93e026131602e5b86d7c3.422x422x1.jpg', 'https://images.genius.com/24afdee8d5f93e026131602e5b86d7c3.422x422x1.jpg', 'https://images.genius.com/24afdee8d5f93e026131602e5b86d7c3.422x422x1.jpg', 'https://images.genius.com/24afdee8d5f93e026131602e5b86d7c3.422x422x1.jpg', 'https://images.genius.com/24afdee8d5f93e026131602e5b86d7c3.422x422x1.jpg', 'https://images.genius.com/24afdee8d5f93e026131602e5b86d7c3.422x422x1.jpg', 'https://images.genius.com/24afdee8d5f93e026131602e5b86d7c3.422x422x1.jpg', 'https://images.genius.com/24afdee8d5f93e026131602e5b86d7c3.422x422x1.jpg', 'https://images.genius.com/24afdee8d5f93e026131602e5b86d7c3.422x422x1.jpg', 'https://images.genius.com/24afdee8d5f93e026131602e5b86d7c3.422x422x1.jpg', 'https://images.genius.com/24afdee8d5f93e026131602e5b86d7c3.422x422x1.jpg', 17
);

insert into images (
image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, gallery_id
) values (
'https://images.genius.com/24afdee8d5f93e026131602e5b86d7c3.422x422x1.jpg', 'https://images.genius.com/24afdee8d5f93e026131602e5b86d7c3.422x422x1.jpg', 'https://images.genius.com/24afdee8d5f93e026131602e5b86d7c3.422x422x1.jpg', 'https://images.genius.com/24afdee8d5f93e026131602e5b86d7c3.422x422x1.jpg', 'https://images.genius.com/24afdee8d5f93e026131602e5b86d7c3.422x422x1.jpg', 'https://images.genius.com/24afdee8d5f93e026131602e5b86d7c3.422x422x1.jpg', 'https://images.genius.com/24afdee8d5f93e026131602e5b86d7c3.422x422x1.jpg', 'https://images.genius.com/24afdee8d5f93e026131602e5b86d7c3.422x422x1.jpg', 'https://images.genius.com/24afdee8d5f93e026131602e5b86d7c3.422x422x1.jpg', 'https://images.genius.com/24afdee8d5f93e026131602e5b86d7c3.422x422x1.jpg', 'https://images.genius.com/24afdee8d5f93e026131602e5b86d7c3.422x422x1.jpg', 'https://images.genius.com/24afdee8d5f93e026131602e5b86d7c3.422x422x1.jpg', 'https://images.genius.com/24afdee8d5f93e026131602e5b86d7c3.422x422x1.jpg', 'https://images.genius.com/24afdee8d5f93e026131602e5b86d7c3.422x422x1.jpg', 'https://images.genius.com/24afdee8d5f93e026131602e5b86d7c3.422x422x1.jpg', 18
);

-- gallery_presets for artsy_kids galleries
insert into gallery_presets(
ceiling_texture, wall_texture, floor_texture, atmosphere_lighting, music, gallery_id
) values (
'marble','grey slate', 'wood', 'light blue', 'gymnopedie', 16
);

insert into gallery_presets(
ceiling_texture, wall_texture, floor_texture, atmosphere_lighting, music, gallery_id
) values (
'marble','grey slate', 'wood', 'light blue', 'gymnopedie', 17
);

insert into gallery_presets(
ceiling_texture, wall_texture, floor_texture, atmosphere_lighting, music, gallery_id
) values (
'marble','grey slate', 'wood', 'light blue', 'gymnopedie', 18
);

-- galleries for music_lover
insert into galleries (
gallery_name, thumbnail, is_private, views, times_favorited, shares, author, user_id
) values (
'musicGallery', 'https://i.imgur.com/XVbSovA.jpg', false, 0, 1, 0, 'music_lover', 4
);

insert into galleries (
gallery_name, thumbnail, is_private, views, times_favorited, shares, author, user_id
) values (
'musicGallery 2', 'https://i.imgur.com/XVbSovA.jpg', false, 0, 1, 0, 'music_lover', 4
);

insert into galleries (
gallery_name, thumbnail, is_private, views, times_favorited, shares, author, user_id
) values (
'musicGallery 3', 'https://i.imgur.com/XVbSovA.jpg', false, 0, 1, 0, 'music_lover', 4
);


-- images for music_lover galleries
insert into images (
image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, gallery_id
) values (
'http://www.moma.org/media/W1siZiIsIjMwNTQ1NiJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=5a021fd15b7f069f', 'http://www.moma.org/media/W1siZiIsIjMwNTQ1NiJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=5a021fd15b7f069f', 'http://www.moma.org/media/W1siZiIsIjMwNTQ1NiJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=5a021fd15b7f069f', 'http://www.moma.org/media/W1siZiIsIjMwNTQ1NiJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=5a021fd15b7f069f', 'http://www.moma.org/media/W1siZiIsIjMwNTQ1NiJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=5a021fd15b7f069f', 'http://www.moma.org/media/W1siZiIsIjMwNTQ1NiJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=5a021fd15b7f069f', 'http://www.moma.org/media/W1siZiIsIjMwNTQ1NiJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=5a021fd15b7f069f', 'http://www.moma.org/media/W1siZiIsIjMwNTQ1NiJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=5a021fd15b7f069f', 'http://www.moma.org/media/W1siZiIsIjMwNTQ1NiJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=5a021fd15b7f069f', 'http://www.moma.org/media/W1siZiIsIjMwNTQ1NiJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=5a021fd15b7f069f', 'http://www.moma.org/media/W1siZiIsIjMwNTQ1NiJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=5a021fd15b7f069f', 'http://www.moma.org/media/W1siZiIsIjMwNTQ1NiJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=5a021fd15b7f069f', 'http://www.moma.org/media/W1siZiIsIjMwNTQ1NiJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=5a021fd15b7f069f', 'http://www.moma.org/media/W1siZiIsIjMwNTQ1NiJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=5a021fd15b7f069f', 'http://www.moma.org/media/W1siZiIsIjMwNTQ1NiJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=5a021fd15b7f069f', 19
);

insert into images (
image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, gallery_id
) values (
'http://www.moma.org/media/W1siZiIsIjMwNTQ1NiJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=5a021fd15b7f069f', 'http://www.moma.org/media/W1siZiIsIjMwNTQ1NiJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=5a021fd15b7f069f', 'http://www.moma.org/media/W1siZiIsIjMwNTQ1NiJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=5a021fd15b7f069f', 'http://www.moma.org/media/W1siZiIsIjMwNTQ1NiJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=5a021fd15b7f069f', 'http://www.moma.org/media/W1siZiIsIjMwNTQ1NiJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=5a021fd15b7f069f', 'http://www.moma.org/media/W1siZiIsIjMwNTQ1NiJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=5a021fd15b7f069f', 'http://www.moma.org/media/W1siZiIsIjMwNTQ1NiJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=5a021fd15b7f069f', 'http://www.moma.org/media/W1siZiIsIjMwNTQ1NiJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=5a021fd15b7f069f', 'http://www.moma.org/media/W1siZiIsIjMwNTQ1NiJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=5a021fd15b7f069f', 'http://www.moma.org/media/W1siZiIsIjMwNTQ1NiJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=5a021fd15b7f069f', 'http://www.moma.org/media/W1siZiIsIjMwNTQ1NiJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=5a021fd15b7f069f', 'http://www.moma.org/media/W1siZiIsIjMwNTQ1NiJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=5a021fd15b7f069f', 'http://www.moma.org/media/W1siZiIsIjMwNTQ1NiJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=5a021fd15b7f069f', 'http://www.moma.org/media/W1siZiIsIjMwNTQ1NiJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=5a021fd15b7f069f', 'http://www.moma.org/media/W1siZiIsIjMwNTQ1NiJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=5a021fd15b7f069f', 20
);

insert into images (
image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, gallery_id
) values (
'http://www.moma.org/media/W1siZiIsIjMwNTQ1NiJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=5a021fd15b7f069f', 'http://www.moma.org/media/W1siZiIsIjMwNTQ1NiJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=5a021fd15b7f069f', 'http://www.moma.org/media/W1siZiIsIjMwNTQ1NiJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=5a021fd15b7f069f', 'http://www.moma.org/media/W1siZiIsIjMwNTQ1NiJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=5a021fd15b7f069f', 'http://www.moma.org/media/W1siZiIsIjMwNTQ1NiJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=5a021fd15b7f069f', 'http://www.moma.org/media/W1siZiIsIjMwNTQ1NiJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=5a021fd15b7f069f', 'http://www.moma.org/media/W1siZiIsIjMwNTQ1NiJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=5a021fd15b7f069f', 'http://www.moma.org/media/W1siZiIsIjMwNTQ1NiJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=5a021fd15b7f069f', 'http://www.moma.org/media/W1siZiIsIjMwNTQ1NiJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=5a021fd15b7f069f', 'http://www.moma.org/media/W1siZiIsIjMwNTQ1NiJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=5a021fd15b7f069f', 'http://www.moma.org/media/W1siZiIsIjMwNTQ1NiJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=5a021fd15b7f069f', 'http://www.moma.org/media/W1siZiIsIjMwNTQ1NiJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=5a021fd15b7f069f', 'http://www.moma.org/media/W1siZiIsIjMwNTQ1NiJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=5a021fd15b7f069f', 'http://www.moma.org/media/W1siZiIsIjMwNTQ1NiJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=5a021fd15b7f069f', 'http://www.moma.org/media/W1siZiIsIjMwNTQ1NiJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=5a021fd15b7f069f', 21
);

-- gallery_presets for music_lovers galleries
insert into gallery_presets(
ceiling_texture, wall_texture, floor_texture, atmosphere_lighting, music, gallery_id
) values (
'marble','grey slate', 'wood', 'light blue', 'gymnopedie', 19
);

insert into gallery_presets(
ceiling_texture, wall_texture, floor_texture, atmosphere_lighting, music, gallery_id
) values (
'marble','grey slate', 'wood', 'light blue', 'gymnopedie', 20
);

insert into gallery_presets(
ceiling_texture, wall_texture, floor_texture, atmosphere_lighting, music, gallery_id
) values (
'marble','grey slate', 'wood', 'light blue', 'gymnopedie', 21
);


-- Favorites of test, test2, artsy_kid, music_lover
insert into gallery_favorites(
user_id, favorited
) values (
1, 1
);

insert into gallery_favorites(
user_id, favorited
) values (
2, 1
);

insert into gallery_favorites(
user_id, favorited
) values (
3, 1
);

insert into gallery_favorites(
user_id, favorited
) values (
4, 1
);

insert into gallery_favorites(
user_id, favorited
) values (
1, 2
);

insert into gallery_favorites(
user_id, favorited
) values (
1, 3
);

insert into gallery_favorites(
user_id, favorited
) values (
1, 4
);

insert into gallery_favorites(
user_id, favorited
) values (
1, 5
);

insert into gallery_favorites(
user_id, favorited
) values (
1, 6
);

insert into gallery_favorites(
user_id, favorited
) values (
1, 7
);

insert into gallery_favorites(
user_id, favorited
) values (
1, 8
);

insert into gallery_favorites(
user_id, favorited
) values (
1, 9
);

insert into gallery_favorites(
user_id, favorited
) values (
1, 10
);

insert into gallery_favorites(
user_id, favorited
) values (
1, 11
);

insert into gallery_favorites(
user_id, favorited
) values (
1, 12
);

insert into gallery_favorites(
user_id, favorited
) values (
1, 13
);

insert into gallery_favorites(
user_id, favorited
) values (
1, 14
);

insert into gallery_favorites(
user_id, favorited
) values (
1, 15
);

insert into gallery_favorites(
user_id, favorited
) values (
1, 16
);

insert into gallery_favorites(
user_id, favorited
) values (
1, 17
);

insert into gallery_favorites(
user_id, favorited
) values (
1, 18
);

insert into gallery_favorites(
user_id, favorited
) values (
1, 19
);

insert into gallery_favorites(
user_id, favorited
) values (
1, 20
);

insert into gallery_favorites(
user_id, favorited
) values (
1, 21
);

