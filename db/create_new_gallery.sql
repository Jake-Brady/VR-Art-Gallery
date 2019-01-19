insert into galleries
(gallery_name, thumbnail, is_private, views, times_favorited, shares, author, user_id
) values (
$1, $2, $3, 0, 0, 0, $4, $5
)