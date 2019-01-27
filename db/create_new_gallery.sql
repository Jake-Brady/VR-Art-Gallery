with create_new_gallery as (
insert into galleries
(gallery_name, thumbnail, is_private, views, times_favorited, shares, author, user_id)
values
($1, $2, $3, 0, 0, 0, $4, $5)
returning id
), images_creation as (
insert into images
(image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, gallery_id)
values
($11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, (select id from create_new_gallery))
returning id
), gallery_presets_creation as (
insert into gallery_presets
(ceiling_texture, wall_texture, floor_texture, atmosphere_lighting, music, gallery_id)
values
($9, $10, $8, $7, $6, (select id from create_new_gallery))
)

insert into captions
(img1_caption, img2_caption, img3_caption, img4_caption, img5_caption, img6_caption, img7_caption, img8_caption, img9_caption, img10_caption, img11_caption, img12_caption, img13_caption, img14_caption, img15_caption, images_id)
values
($26, $27, $28, $29, $30, $31, $32, $33, $34, $35, $36, $37, $38, $39, $40, (select id from images_creation));