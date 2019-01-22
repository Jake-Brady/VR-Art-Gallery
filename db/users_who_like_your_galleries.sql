select u.username, g.gallery_name from users as u, galleries as g
inner join gallery_favorites
on gallery_favorites.favorited = g.id
where gallery_favorites.user_id = u.id 
and gallery_favorites.favorited = ANY($1::INTEGER[])