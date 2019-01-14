select * from views, times_favorited, gallery_name, thumbnail
join users.id
on gallery_favorites.user_id = user.id
where user.username = $1