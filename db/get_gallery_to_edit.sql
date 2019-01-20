select * from galleries
join gallery_presets
on gallery_presets.gallery_id = galleries.id
join images
on images.gallery_id = galleris.id
join captions
on captions.images_id = images.id
where galleries.id = $1