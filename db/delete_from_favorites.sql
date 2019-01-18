delete from gallery_favorites
where user_id = $1 AND favorited = $2;