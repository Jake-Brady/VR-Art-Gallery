update users
set email = $2
where username = $1
RETURNING email