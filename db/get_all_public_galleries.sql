select * from galleries
where is_private = false
Order By times_favorited desc, views desc
limit 12 offset $1;