SELECT is_private, views, times_favorited, gallery_name, galleries.id, thumbnail
FROM galleries
JOIN users
ON users.id = galleries.user_id
where users.username = $1