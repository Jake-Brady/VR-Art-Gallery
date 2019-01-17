insert into gallery_favorites
user_id = $1
favorited = $2

update galleries
set times_favorited = times_favorited + 1
where id = $2;