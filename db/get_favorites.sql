select views, times_favorited, shares, gallery_name, thumbnail, author, galleries.id from galleries
join gallery_favorites
on galleries.id = gallery_favorites.favorited
join users
on gallery_favorites.user_id = users.id
where users.username = $1