BEGIN TRANSACTION;
UPDATE galleries 
    SET gallery_name = 'fuck', 
        thumbnail = 'fuck',
        is_private = false
    WHERE id = 2;

UPDATE gallery_presets
    SET ceiling_texture = 'fuck',
        wall_texture = 'fuck',
        floor_texture = 'fuck',
        atmosphere_lighting = 'fuck',
        music = 'fuck'
    WHERE gallery_id = 2;

UPDATE images
    SET image1 = 'fuck',
        image2 = 'fuck',
        image3 = 'fuck',
        image4 = 'fuck',
        image5 = 'fuck',
        image6 = 'fuck',
        image7 = 'fuck',
        image8 = 'fuck',
        image9 = 'fuck',
        image10 = 'fuck',
        image11 = 'fuck',
        image12 = 'fuck',
        image13 = 'fuck',
        image14 = 'fuck',
        image15 = 'fuck'
    WHERE gallery_id = 2;

UPDATE captions
    SET img1_caption = 'fuck',
        img2_caption = 'fuck',
        img3_caption = 'fuck',
        img4_caption = 'fuck',
        img5_caption = 'fuck',
        img6_caption = 'fuck',
        img7_caption = 'fuck',
        img8_caption = 'fuck',
        img9_caption = 'fuck',
        img10_caption = 'fuck',
        img11_caption = 'fuck',
        img12_caption = 'fuck',
        img13_caption = 'fuck',
        img14_caption = 'fuck',
        img15_caption = 'fuck'
    FROM images
    WHERE 
        images.id = captions.images_id AND
        images.gallery_id = 2;
COMMIT;

-- Creating new gallery along with images, presets, and captions.

with create_new_gallery as (
insert into galleries
(gallery_name, thumbnail, is_private, views, times_favorited, shares, author, user_id)
values
('tits', 'tits', false, 0, 0, 0, 'test', 1)
returning id
), images_creation as (
insert into images
(image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, gallery_id)
values
('photoTest', 'photoTest', 'photoTest', 'photoTest', 'photoTest', 'photoTest', 'photoTest', 'photoTest', 'photoTest', 'photoTest', 'photoTest', 'photoTest', 'photoTest', 'photoTest', 'photoTest', (select id from create_new_gallery))
returning id
), gallery_presets_creation as (
insert into gallery_presets
(ceiling_texture, wall_texture, floor_texture, atmosphere_lighting, music, gallery_id)
values
('tits', 'tits', 'tits', 'tits', 'tits', (select id from create_new_gallery))
)

insert into captions
(img1_caption, img2_caption, img3_caption, img4_caption, img5_caption, img6_caption, img7_caption, img8_caption, img9_caption, img10_caption, img11_caption, img12_caption, img13_caption, img14_caption, img15_caption, images_id)
values
('tits', 'tits', 'tits', 'tits', 'tits', 'tits', 'tits', 'tits', 'tits', 'tits', 'tits', 'tits', 'tits', 'tits', 'tits', (select id from images_creation));
