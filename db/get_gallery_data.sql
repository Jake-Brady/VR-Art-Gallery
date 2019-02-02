select image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, wall_texture, floor_texture, atmosphere_lighting, music from images as i
join galleries
on galleries.id = i.gallery_id
join gallery_presets
on gallery_presets.id = galleries.id
where galleries.gallery_name = $1 AND galleries.author = $2