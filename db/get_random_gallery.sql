select gallery_name, author from galleries
where is_private = false
ORDER BY RANDOM()
LIMIT 1