select image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, img1_caption, img2_caption, img3_caption, img4_caption, img5_caption, img6_caption, img7_caption, img8_caption, img9_caption, img10_caption, img11_caption, img12_caption, img13_caption, img14_caption, img15_caption, wall_texture, floor_texture, atmosphere_lighting, music from images as i
join captions
on captions.images_id = i.id
join galleries
on galleries.id = i.gallery_id
join gallery_presets
on gallery_presets.id = galleries.id
where galleries.gallery_name = $1 AND galleries.author = $2